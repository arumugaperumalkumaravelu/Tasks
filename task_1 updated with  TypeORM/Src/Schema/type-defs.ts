import { gql } from "apollo-server";
import TodoTypeDefs from "./Todo_Schema/TodoTypeDefs";
import UserTypeDefs from "./User_Schema/UserTypeDefs";

const combinedTypeDefs = gql`
  ${TodoTypeDefs}
  ${UserTypeDefs}
`;

export const typeDefs = combinedTypeDefs;


// import TodoTypeDefs from "./Todo_Schema/TodoTypeDefs";
// import UserTypeDefs from "./User_Schema/UserTypeDefs";

// export const typeDefs = [TodoTypeDefs,UserTypeDefs];