# graphql_sequelize
A simple way to create GraphQL API for an existing database

1 Install modules

```javascript
npm install
```

if server is not mssql then install :

$ npm install --save pg pg-hstore
$ npm install --save mysql
$ npm install --save sqlite3


2 server/config/config.js setup connection

```javascript
config.database.user = 'Database user';
config.database.password = 'Password';
config.database.server = 'IP or Name db server';
config.database.database = 'Database name';
config.database.options = {//for MSSQL 
	//port: 'Instance port', 
	//instanceName: 'Name instance'
	//,tdsVersion: '7_1' // for MSSQL 2000
};
config.database.dialect = 'dialect server';
```
<a href="http://docs.sequelizejs.com/en/latest/docs/getting-started/"> about sequelize </a>

3 run sequelize-auto:

```javascript
gulp db
```

4 Write graphql models /server/schemas/db_schema.js

5 run graphiql

```javascript
gulp
```
