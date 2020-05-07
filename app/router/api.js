'use strict';

module.exports = app => {
  const { router, controller } = app;

  const { user } = controller;
  // home page
  router.get('/user', user.index);

};
