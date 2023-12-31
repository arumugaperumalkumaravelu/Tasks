import TodoService from "../../Service/TodoService";

const TodoResolver = {
  Query: {
    getTodos: async (
      parent: any,
      args: { first?: number; offset?: number },
      context: any
    ) => {
      const { first, offset } = args;
      const userService = new TodoService();
      return userService.getTodos(first,offset);
    },
    getTodo(parent: any, args: any, context: any) {
      return TodoService.getTodo(args.todo_id);
    },
  },
  Mutation: {
    createTodo(parent: any, args: any, context: any) {
      return TodoService.createTodo(args.input);
    },
  },
};

export default TodoResolver;
