// sequelize-auto.js
//
// Generate model for existings database
//
// 

var appConfig = require('./server/config/config');


var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto(appConfig.database.database, 
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

 auto.run(function (err) {
   if (err) throw err;
    auto.write();
 });
