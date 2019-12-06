'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Shops = app.model.define('Shops', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    thumb_url: STRING,
    created_at: DATE,
    updated_at: DATE,
  });


  return Shops;
};
