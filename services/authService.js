const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_secreta_super_segura';

class AuthService {
  async login(username, password) {
    if (username === 'admin' && password === '1234') {
      return jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    }
    return null;
  }
  getSecret() { return SECRET_KEY; }
}
module.exports = new AuthService();