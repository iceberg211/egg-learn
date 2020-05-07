'use strict';
// const R = require('ramda');
const Service = require('egg').Service;

class User extends Service {
  constructor(ctx) {
    super(ctx);
    this.userMoel = this.ctx.model.User;
    this.invitationMoel = this.ctx.model.Invitation;
    this.where = this.ctx.helper.where;
  }

  /**
   * * 生成邀请码
   * @param {number} user_id 用户 ID
   * @param {number} length 生成的个数
   * @return {Array<Invitation>} 所生成的邀请码数组
   * @memberof User
   */
  async generatorInvitation(user_id, length) {
    const invitation_promises = this.ctx.helper.range(length).map(() => {
      return this.invitationMoel.create({ user_id });
    });
    return Promise.all(invitation_promises);
  }

  /**
 * * 校验邀请码有效性
 * @param {string} code 邀请码
 * @return {boolean} 是否有效
 * @memberof User
 */
  async checkInvitation(code) {
    const invitation = await this.invitationMoel.findOne({
      where: {
        code,
      },
    });
    if (!invitation || invitation.use_user_id) {
      return this.ctx.helper.throw(400, 'code', '无效的邀请码');
    }
    return invitation;
  }

  async singUp(body) {
    const { code, email, password, username } = body;
    const invitation = await this.checkInvitation(code);
    const user = this.userMoel.create({ code, email, password, username });

    // 垃圾书教一些垃圾写法，后期优化
    invitation.use_user_id = user.id;
    invitation.use_username = user.username;
    await invitation.save();
    const invitations = await this.generatorInvitation(user.id, 5);
    return { user, invitations };
  }
}

module.exports = User;
