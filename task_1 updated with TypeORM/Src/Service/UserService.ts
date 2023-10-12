import { AppDataSource } from "../data-source";
import { UserEntity } from "../Entity/UserEntity";
import { TodoEntity } from "../Entity/TodoEntity";

class UserService {

  getUsers = async (
    first?: number,
    offset?: number
  ): Promise<{ total: number; data: UserEntity[] }> => {
    
    const userRepository = AppDataSource.getRepository(UserEntity);
        const data = await userRepository.createQueryBuilder("user")
                        .leftJoinAndSelect("user.todos", "todos")
                        .where("todos.user_id = user.user_id") 
                        .limit(first) 
                        .offset(offset)
                        .getMany();
                        
        const total = await userRepository.count();
        console.log('data',data);
        return { total, data };  
    
        // const userRepository = AppDataSource.getRepository(UserEntity);
        // let data = await userRepository.find();
        // const total = await userRepository.count();
        // if (first !== undefined && offset !== undefined) {
        // data = data.slice(offset, offset + first);
        // }
        // return { total, data };
  };

  public static async getUser(args: any) {
    const userRespository = AppDataSource.getRepository(UserEntity);
    const data = await userRespository.findOne({ where: { user_id: args } });
    return data;
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


