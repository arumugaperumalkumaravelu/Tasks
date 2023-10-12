import UserService from "../../Service/UserService";
import { UserEntity } from "../../Entity/UserEntity";
import { TodoEntity } from "../../Entity/TodoEntity";
import { AppDataSource } from "../../data-source";
const UserResolver = {
  Query: {
    getUsers: async (
      parent: any,
      args: { first?: number; offset?: number },
      context: any
    ) => {
      const { first, offset } = args;
      const userService = new UserService();
      const { total, data } = await userService.getUsers(first, offset);
      return { total, data };
    },
    getUser(parent: any, args: { user_id: number }, context: any) {
      return UserService.getUser(args.user_id);
    },
  },
  Mutation: {
    createUser(parent: any, args: any, context: any) {
      return UserService.createUser(args.input);
    },
  },
};

export default UserResolver;
