'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.User);
    }
  }
  Ticket.init(
    {
      paymentStatus: DataTypes.BOOLEAN,
      movie_uniq: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'movie Id cannot be empty',
          },
          notNull: {
            msg: 'movie Id cannot be empty',
          },
        },
      },
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'user Id cannot be empty',
          },
          notNull: {
            msg: 'user Id cannot be empty',
          },
        },
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Price cannot be empty',
          },
          notNull: {
            msg: 'Price cannot be empty',
          },
        },
      },
      movieName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ticket',
    }
  );
  Ticket.beforeCreate((ticket, options) => {
    ticket.paymentStatus = false;
  });

  return Ticket;
};
