'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('users', { id: 11 });
    return { user };
  }
}

module.exports = UserService;
