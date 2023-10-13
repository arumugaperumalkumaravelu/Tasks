import { gql } from "apollo-server";
const UserTypeDefs = gql`
  type Query {
    getUsers(first: Int, offset: Int): UserResponse!
    getUser(user_id: Int!): User!
  }

  type UserResponse {
    total: Int!
    data: [User!]!
  }

  type User {
    userId: Int!
    username: String!
    age: Int!
    gender: String!
    place: String!
    todos: [Todo]!
  }

  input CreateUser {
    username: String!
    age: Int!
    gender: String!
    place: String!
  }

  type Mutation {
    createUser(input: CreateUser): User!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default UserTypeDefs;

// updateUser(newData: updateUser): String!
// deleteUser(userId: Int!): String!
