import map from "lodash/map";

import { AppDataSource } from "../data-source";
import { UserEntity } from "../Entity/UserEntity";
import { TodoEntity } from "../Entity/TodoEntity";
import { User } from "../types/user";
import { Todo } from "../types/todo";

class UserService {
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
  };
}

export default UserService;


