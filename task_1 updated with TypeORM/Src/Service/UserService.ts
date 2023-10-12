import { AppDataSource } from "../data-source";
import { UserEntity } from "../Entity/UserEntity";

class UserService {    

    public static async getUsers(): Promise<UserEntity[]>{
        const userRespository = AppDataSource.getRepository(UserEntity);
        const data = await userRespository.find({})
        return data;
    }

    public static async getUser(args: any){
        const userRespository = AppDataSource.getRepository(UserEntity);
        const data = await userRespository.findOne({where:{user_id: args}})
        return data;
    }

    public static async createUser(args: any){
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


