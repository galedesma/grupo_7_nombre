/* const { DataTypes } = require('sequelize/types');
const { sequelize } = require('.'); */

module.exports = (sequelize, DataTypes) => {
  let alias = 'favorite_products';
  let rols = {
    idfavorite_products: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Users_id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  };
  let config = {
    tableName: 'favirite_products',
    underscored: true,
  };

  const favorite_products = sequelize.define(alias, rols, config);

  return favorite_products;
};