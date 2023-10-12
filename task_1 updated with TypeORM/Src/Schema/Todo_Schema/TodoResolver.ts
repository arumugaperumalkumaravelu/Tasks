import TodoService from '../../Service/TodoService';

const TodoResolver = {
    Query: {
        getTodos(parent: any, args: { first?: number, offset?: number }, context: any){
            return TodoService.getTodos(args.first, args.offset);
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
