'use strict';

module.exports = app => {
  const { router, controller } = app;

  const { user, shop } = controller;
  // home page
  router.get('/user', user.index);
  router.get('/shopList', shop.list);
  router.get('/goodsList', shop.goodsList);

};
