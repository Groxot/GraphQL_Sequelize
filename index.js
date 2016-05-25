// index.js
//
// 
//

var appConfig = require('./server/config/config');
var express = require('express');
var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var schema = require('./server/schemas/db_schema');
var cors = require('cors');
var static = require('node-static');



var app = express();
app.use(cors());
// graphql entery point
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

// Start the server
app.set('port', appConfig.server.port || 8080);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});