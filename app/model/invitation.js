'use strict';

const uuid = require('uuid/v1');

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Invitation = app.model.define('Invitation', {
    code: STRING(8),
    user_id: INTEGER,
    use_user_id: INTEGER,
    use_username: STRING(40),
  });

  /**
 * * 检验邀请码是否有效
 * @param {string} code 邀请码
 * @return {Promise<boolean>} 是否有效,使用findeOne
 */
  Invitation.exits = async code => {
    const instance = await Invitation.findOne({
      where: {
        code,
      },
    });
    return Boolean(instance);
  };

  // * 生成邀请码 Hook
  // ? FIXME: 待优化,  定义的数据模型的生命周期
  Invitation.beforeCreate(async instance => {
    const generatorCode = async code => {
      code = uuid().split('-')[0];
      if (await Invitation.exits(code)) {
        return await generatorCode();
      }
      return code;
    };
    if (!instance.code) {
      instance.code = await generatorCode();
    }
  });

  return Invitation;
};
