'use strict';
const { Model } = require('sequelize');
const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Ticket);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'E-mail already in use',
        },
        validate: {
          notEmpty: {
            msg: 'E-mail cannot be empty',
          },
          isEmail: {
            msg: 'Must be a valid email address',
          },
          notNull: {
            msg: 'E-mail cannot be empty',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Password cannot be empty',
          },
          notNull: {
            msg: 'Password cannot be empty',
          },
          len: {
            args: [5, 255],
            msg: 'Password must be more than 4',
          },
        },
      },
      profile_picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  User.beforeCreate((user, options) => {
    user.password = hash(user.password);
  });
  return User;
};
