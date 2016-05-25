// config.js
//
//
// 
var config = {}

config.database = {};
config.server= {};

config.database.user = 'dbUser';
config.database.password = 'dbPass';
config.database.server = 'dbServer';
config.database.database = 'dbName';
config.database.options = {//for MSSQL instances
	//port: '', 
	//instanceName: ''
	//,tdsVersion: '7_1' // for MSSQL 2000
};
config.database.dialect = 'dbType';
config.database.connectionTimeout=150000;
config.database.requestTimeout=150000;
config.server.port = 8080;

module.exports = config;