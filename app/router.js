'use strict';


/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/shops', controller.shop.list);
  router.post('/api/signUp', controller.user.signUp);
};
