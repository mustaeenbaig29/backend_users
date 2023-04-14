const { gql } = require("apollo-server-express");


const typeDefs = gql `


type User {
    id: ID
    name: String
    password: String
     userReach: [UserReach]
}

type Query {
    hello: String

    getAllUsers: [User]
}

input UserInput {
    name: String
    password: String
    userReach: UserReachInput
}

type UserReach {
    phone: UserReachDetail
    email: UserReachDetail
  }

  type UserReachDetail {
    value: String!
    verified: Boolean!
  }

  input UserReachInput {
    phone: UserReachDetailInput
    email: UserReachDetailInput
  }

  input UserReachDetailInput {
    value: String!
    verified: Boolean!
  }

type Mutation {
    createUser(user: UserInput): User
}
`

module.exports = typeDefs