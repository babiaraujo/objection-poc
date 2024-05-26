const { Model } = require('objection');

class User extends Model {
  static get users() {
    return 'users';
  }

  static get class() {
    return {};
  }
}

module.exports = User;
