import UserService from '../../Service/UserService';
import { UserEntity } from '../../Entity/UserEntity';
import { TodoEntity } from '../../Entity/TodoEntity';
import { AppDataSource } from "../../data-source";
const UserResolver = {
    Query: {
        getUsers(){
            return UserService.getUsers()
        },
        getUser(parent: any, args: any, context: any){
            return UserService.getUser(args.user_id);
        },
    },
    User: {
        todos: async (user: UserEntity) => {
            const todoRepository = AppDataSource.getRepository(TodoEntity);
      
            const todos = await todoRepository
              .createQueryBuilder('todo')
              .where('todo.user_id = :user_id', { user_id: user.user_id })
              .getMany();
      
            return todos;
          },
      },
      Mutation: {
        createUser(parent: any, args:any, context:any ){
            return UserService.createUser(args.input);
        },
      }
}

export default UserResolver;

