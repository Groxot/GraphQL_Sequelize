var graphql = require('graphql');
var Sequelize = require('sequelize');
var sequelize = require('../db_schema/connections/connect');
// include needed model from ../../models/ like:
//var Posts = require('../../models/post_table')(sequelize,Sequelize);
//var Users = require('../../models/user_table')(sequelize,Sequelize);

// write graphql object for model
/*
var POSTS = new graphql.GraphQLObjectType({
  name: "POSTS",
  description : "Post information",
  fields: function() {
    return {
    POST_ID:    { 
      type: graphql.GraphQLInt,
      resolve(Posts){
        return Posts.POST_ID
      } 
    },
    POST_DATA:     { 
      type: graphql.GraphQLString,
      resolve(Posts){
        return Posts.POST_DATA
      } 
    }
  }
}
});


var USERS = new graphql.GraphQLObjectType({
  name: "USERS",
  description : "User list",
  fields: function() {
    return {
    USER_ID:    { 
      type: graphql.GraphQLInt,
      resolve(Users){
        return Users.USER_ID
      } 
    },
    USER_NAME:     { 
      type: graphql.GraphQLString,
      resolve(Users){
        return Users.USER_NAME
      } 
    }
    POSTS: {
      type: new graphql.GraphQLList(POSTS),
      resolve(Users){
          return Posts.findAll({where :  {POST_OWNER : Users.USER_ID}});
      }
    }
  }
}
});

*/

//write graphql schema 

const Query = new graphql.GraphQLObjectType({
/*
    name: "User",
    description: "query to get users",
    fields: {
      PERSONS: {
        type: new graphql.GraphQLList(USERS),
        args: {
          USER_ID:{type:graphql.GraphQLString},
        },
        resolve(root, args, x,y) {
           return Person.findAll({where:args});        
        }
      }
    }
*/
  });


var schema = new graphql.GraphQLSchema({
  query : Query
});

module.exports = schema;