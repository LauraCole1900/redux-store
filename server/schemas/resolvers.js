const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");


const resolvers = {

  //=================//
  //     Queries     //
  //=================//

  Query: {

  },


  //=================//
  //    Mutations    //
  //=================//

  Mutation: {

  }
};

module.exports = resolvers;