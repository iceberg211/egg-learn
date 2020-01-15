
'use strict';

const Controller = require('egg').Controller;
// const { signSchemas } = require('../schemas/user');

class UserController extends Controller {
  async signUp() {
    const { ctx } = this;
    const body = ctx.request.body;
    // try {
    //   ctx.validate(signSchemas);
    // } catch (err) {
    //   ctx.body = { success: false, message: '参数错误', data: err };
    //   return;
    // }
    const result = await ctx.service.user.singUp(body);
    ctx.body = result;
  }

}

module.exports = UserController;
