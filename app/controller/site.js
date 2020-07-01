'use strict';

const Controller = require('egg').Controller;

class SiteController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.njk', { name: 'view test' });
  }
}

module.exports = SiteController;
