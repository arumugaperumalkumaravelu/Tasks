import { gql } from "apollo-server";

const TodoTypeDefs = gql`
  type Query {
    getTodos(first: Int, offset: Int): [Todo!]!
    getTodo(todo_id: Int!): Todo!
  }

  type Todo {
    todo_id: Int!
    todo_msg: String!
    status: String!
    description: String!
    alert_time: String!
    user_id: Int!
  }

  input CreateTodo {
    todo_msg: String!
    status: String!
    description: String!
    alert_time: String!
    user_id: Int!
  }

  type Mutation {
    createTodo(input: CreateTodo): String!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default TodoTypeDefs;
