/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {

  const config = {};

  config.description = 'egg学校教程';

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575448498486_9411';

  // 中间件
  config.middleware = [];

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  // 模板引擎
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };


  exports.validator = {
    enable: true,
    package: 'egg-validate',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'egg-sql',
  };

  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };


  config.passportLocal = {
    usernameField: 'name',
    passwordField: 'pass',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
