'use strict';

const signSchemas = {
  username: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'password',
    compare: 'confirmPassword',
    message: '密码不相同',
  },
  code: { type: 'number' },
};

module.exports = {
  signSchemas,
};
