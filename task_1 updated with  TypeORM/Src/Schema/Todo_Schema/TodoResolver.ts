import TodoService from '../../Service/TodoService';

const TodoResolver = {
    Query: {
        getTodos(){
            return TodoService.getTodos();
        },
        getTodo(parent: any, args: any, context: any){
            return TodoService.getTodo(args.todo_id);
        }
    },
    Mutation: {
        createTodo(parent: any, args:any, context:any ){
            return TodoService.createTodo(args.input);
        },

    }
}

export default TodoResolver;
