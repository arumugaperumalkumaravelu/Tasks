import UserResolver from "./User_Schema/UserResolver";
import TodoResolver from "./Todo_Schema/TodoResolver";

export const resolvers = [TodoResolver,UserResolver];

// Old Codes Before Services Concept

// import { Resolver, Query, Arg } from 'type-graphql';
// import { AppDataSource } from '../data-source';
// import { TodoEntity } from '../Entity/TodoEntity';
// import { UserEntity } from '../Entity/UserEntity';

// @Resolver()
// export class TodoResolver {
//     @Query(() => [TodoEntity])
//     async todos() {
//       try {
//         const todoRepository =  AppDataSource.getRepository(TodoEntity);
//         const todos = await todoRepository.find();
//         return todos;
//       } catch (error) {
//         console.error(error);
//         throw new Error('Failed to fetch Todos');
//       }
//     }
  
//     @Query(() => TodoEntity, { nullable: true })
//     async todo(@Arg('todo_id') todo_id: number) {
//       try {
//         const todoRepository =  AppDataSource.getRepository(TodoEntity);
//         const todo = await todoRepository.findOne({ where: { todo_id } });
//         return todo;
//       } catch (error) {
//         console.error(error);
//         throw new Error('Failed to fetch todo');
//       }
//     }
//   }

// @Resolver()
// export class UserResolver {
//   @Query(() => [UserEntity])
//   async users() {
//     try {
//       const userRepository =  AppDataSource.getRepository(UserEntity);
//       const users = await userRepository.find();
//       return users;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Failed to fetch users');
//     }
//   }

//   @Query(() => UserEntity, { nullable: true })
//   async user(@Arg('user_id') user_id: number) {
//     try {
//       const userRepository =  AppDataSource.getRepository(UserEntity);
//       const user = await userRepository.findOne({ where: { user_id } });
//       return user;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Failed to fetch user');
//     }
//   }
// }




