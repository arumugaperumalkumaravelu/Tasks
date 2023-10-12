import { getRepository } from "typeorm";
import { UserEntity } from '../Entities/UserEntity';
import { TodoEntity } from '../Entities/TodoEntity';

const resolvers = {
  Query: {
    getTodos: async () => {
      const todoRepository = getRepository(TodoEntity);
      return todoRepository.find();
    },
    getTodo: async (parent, args) => {
      const todoRepository = getRepository(TodoEntity);
      return todoRepository.findOne(args.todo_id);
    },
    getUserList: async () => {
      const userRepository = getRepository(UserEntity);
      return userRepository.find();
    },
    getUser: async (parent, args) => {
      const userRepository = getRepository(UserEntity);
      return userRepository.findOne(args.user_id);
    },
  },
  User: {
    todos: async (user) => {
      const todoRepository = getRepository(TodoEntity);
      return todoRepository.find({ where: { user: user } });
    },
  },
};
module.exports = { resolvers };
