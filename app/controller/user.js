
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async signUp() {
    const { ctx } = this;
    const body = ctx.request.body;

    const result = await ctx.service.user.singUp(body);
    ctx.body = result;
  }

  async userList() {
    const { ctx } = this;
    const body = ctx.request.body;

    const result = await ctx.service.user.singUp(body);
    ctx.body = result;
  }

  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: [],
    };
  }

}

module.exports = UserController;
