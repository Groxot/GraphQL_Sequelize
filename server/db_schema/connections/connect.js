var appConfig = require('../../config/config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
  appConfig.database.database, 
  appConfig.database.user,
  appConfig.database.password, {
  dialectOptions : appConfig.database.options,
  host: appConfig.database.server,
  dialect: appConfig.database.dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


module.exports = sequelize;