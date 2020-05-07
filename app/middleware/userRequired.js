'use strict';

/*
 * 需要登录
 */
module.exports = () => {
  return async (ctx, next) => {
    if (!ctx.user || !ctx.user._id) {
      ctx.status = 403;
      ctx.body = 'forbidden!';
      return;
    }
    await next();
  };
};
