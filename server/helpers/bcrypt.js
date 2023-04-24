const bcrypt = require('bcrypt');

module.exports = {
  hash: (password) => {
    return bcrypt.hashSync(password, 8);
  },
  compare: (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
  },
};
