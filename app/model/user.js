'use strict';

const bcrypt = require('bcryptjs');

module.exports = app => {

  const { INTEGER, STRING, TINYINT } = app.Sequelize;
  const User = app.model.define('User', {
    email: STRING(40),
    password: STRING,
    // 自增
    inviter_id: INTEGER,
    username: STRING(40),
    weibo: STRING(40),
    weixin: STRING(40),
    team_id: INTEGER,
    receive_remote: {
      type: TINYINT(1),
      defaultValue: 0,
    },
    email_verifyed: {
      type: TINYINT(1),
      defaultValue: 0,
    },
    avatar: STRING(40),
  });

  User.associate = function() {
    // 设置联合，意味着每一个邀请券都有属于用户的属性
    app.model.Invitation.belongsTo(app.model.User, {
      foreignKey: 'user_id',
    });

    // 关联
    app.model.User.hasMany(app.model.Invitation, {
      foreignKey: 'user_id',
    });

    app.model.Invitation.belongsTo(app.model.User, {
      foreignKey: 'use_user_id',
      as: 'used_user',
    });

    app.model.User.hasOne(app.model.Invitation, {
      foreignKey: 'use_user_id',
      as: 'my_used_invitaion',
    });
  };

  /**
   * * 哈希密码 Hooks
   * @param {User} user 用户实例
   * @return {void}
   */
  async function hashPwd(user) {
    if (!user.changed('password')) {
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(user.password, salt);
  }

  User.beforeSave(hashPwd);

  /**
   * * 用户登录方法
   * @param {string} email 邮箱
   * @param {string} password 密码
   * @return {(User|boolean)} 登陆成功的用户
   */
  User.Auth = async function(email, password) {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    if (await bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return false;
  };

  return User;
};
