import { AppDataSource } from "../data-source";
import { TodoEntity } from "../Entity/TodoEntity";

class TodoService {    

    public static async getTodos(): Promise<TodoEntity[]>{
        const todoRepository = AppDataSource.getRepository(TodoEntity);
        const data = await todoRepository.find()
        return data;
    }

    public static async getTodo(args: any){
        const todoRepository = AppDataSource.getRepository(TodoEntity);
        const data = await todoRepository.findOne({where:{todo_id: args}})
        return data;
    }

    public static async createTodo(args: any){
        const todoRepository = AppDataSource.getRepository(TodoEntity);
        try {
            await todoRepository.save(args);
            return "Todo Created Successfully";
        } catch (error) {
            console.error(error);
            throw new Error("Failed to create a todo"); 
        }
    }

}

export default TodoService;