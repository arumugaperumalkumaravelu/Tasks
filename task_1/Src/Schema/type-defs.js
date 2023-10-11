const { gql } = require("apollo-server");

const typeDefs = gql`

    type Query {
        getTodos : [Todo!]!
        getTodo(todo_id: Int!): Todo!
        getUserList : [User!]!
        getUser(user_id: Int!) : User!
    }

    type Todo {
        todo_id: Int!
        todo_msg: String!
        status: String!
        description: String!
        alert_time: String!
        user_id : Int!
    }

    type User {
        user_id: Int!
        username: String!
        age: Int!
        gender: String!
        place: String!
        todos : [Todo]
    }

`;

module.exports = { typeDefs };