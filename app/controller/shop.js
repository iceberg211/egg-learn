'use strict';

const Controller = require('egg').Controller;

class ShopController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.model.Shops.findAll({
      attributes: [ 'id', 'name' ],
    });

    ctx.body = {
      message: 'sucesss',
      data: result,
    };
  }

  async goodsList() {
    const { ctx } = this;
    console.log(ctx.model);

    const result = await ctx.model.Goods.findAll({
      attributes: [
        'id',
        'name',
      ],
    });

    ctx.body = {
      message: 'sucesss',
      data: result,
    };
  }


}

module.exports = ShopController;
