'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Shop = app.model.define('Goods',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      shop_id: {
        type: INTEGER,
        allowNull: false,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      thumb_url: STRING,
    });


  return Shop;
};
