const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  create: (payload) => {
    return jwt.sign(payload, SECRET);
  },
  verifyToken: (token) => {
    return jwt.verify(token, SECRET);
  },
};
