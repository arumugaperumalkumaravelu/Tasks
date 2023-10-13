import { gql } from "apollo-server";

const TodoTypeDefs = gql`
  type Query {
    getTodos(first: Int, offset: Int): [Todo!]!
    getTodo(todoId: Int!): Todo!
  }

  type Todo {
    todoId: Int!
    todoMsg: String!
    status: String!
    description: String!
    alertTime: String!
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
