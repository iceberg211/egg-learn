'use strict';

/** @type Egg.EggPlugin */

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// };

exports.mysql = {
  enable: true,
  package: 'egg-sequelize',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};


exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local',
};


exports.email = {
  enable: true,
  package: 'egg-mail',
};

