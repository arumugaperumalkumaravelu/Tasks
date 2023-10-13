import { AppDataSource } from "../data-source";
import { UserEntity } from "../Entity/UserEntity";
import { TodoEntity } from "../Entity/TodoEntity";
import { User } from "../types/user";
import { Todo } from "../types/todo";
import map from "lodash/map";

class UserService {

  // getUsers Funtion
  public getUsers = async (
    first?: number,
    offset?: number
  ): Promise<{ total: number; data: User[] }> => {
    const userRepository = AppDataSource.getRepository(UserEntity);

    const userRecordsList = await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.todos", "todo", "todo.user_id = user.user_id")
      .limit(first)
      .offset(offset)
      .getMany();

    const total = await userRepository.count();

    const users = map(userRecordsList, (userRecord) => {
      const { user_id } = userRecord;
      return {
        userId: user_id,
        ...userRecord,
        todos: map(userRecord.todos, (toDo) => {
          const { todo_id, todo_msg, alert_time } = toDo;
          return {
            todoId: todo_id,
            todoMsg: todo_msg,
            alertTime: alert_time,
            ...toDo
          };
        }),
      };
    });

    return { total, data: users };
  }

  // getUser Funtion
  static getUser = async (user_id: number)=> {
    const userRespository = AppDataSource.getRepository(UserEntity);

    const userRecord = await userRespository
        .createQueryBuilder("user")
        .where("user.user_id = :user_id", { user_id })
        .leftJoinAndSelect("user.todos", "todo")
        .getOne()

    const todoList = map(userRecord!.todos, (todoItem) => {
          const { todo_id,alert_time,todo_msg } = todoItem;
          return {
            todoId: todo_id,
            todoMsg: todo_msg,
            alertTime: alert_time,
            ...todoItem,
          };
        });

    const user = { ...userRecord, userId: userRecord!.user_id, todos : todoList}
    
    return user;
    
  }

  public static async createUser(args: any) {
    const userRespository = AppDataSource.getRepository(UserEntity);
    try {
      await userRespository.save(args);
      return "User Created Successfully";
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create a todo");
    }
  }
}

export default UserService;

    // const userRepository = AppDataSource.getRepository(UserEntity);
    // let data = await userRepository.find();
    // const total = await userRepository.count();
    // if (first !== undefined && offset !== undefined) {
    // data = data.slice(offset, offset + first);
    // }
    // return { total, data };


    
