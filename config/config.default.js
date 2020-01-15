/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575448498486_9411';

  // add your middleware config here
  config.middleware = [ 'robot' ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  // config.mongoose = {
  //   url: 'mongodb://127.0.0.1:27017/egg_learn',
  //   server: { poolSize: 20 },
  //   reconnectTries: 10,
  //   reconnectInterval: 500,
  // };

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


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
