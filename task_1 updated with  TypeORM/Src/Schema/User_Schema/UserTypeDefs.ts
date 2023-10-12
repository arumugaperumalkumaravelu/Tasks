import { gql } from "apollo-server";
import TodoTypeDefs from "../Todo_Schema/TodoTypeDefs";
const UserTypeDefs = gql`

    type Query {
        getUsers: [User!]!
        getUser(user_id: Int!): User!
    }

    type User {
        user_id: Int!
        username: String!
        age: Int!
        gender: String!
        place: String!
        todos: [Todo]   
    }

    input CreateUser {
        username: String!
        age: Int!
        gender: String!
        place: String!
    }

    type Mutation {
        createUser(input:CreateUser): User!
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

export default UserTypeDefs;

// updateUser(newData: updateUser): String!
// deleteUser(userId: Int!): String!