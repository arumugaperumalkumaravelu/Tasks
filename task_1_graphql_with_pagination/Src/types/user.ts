import { Todo } from "./todo";

export type User = {
  userId: number;
  username: string;
  age: number;
  gender: string;
  place: string;
  todos: Todo[];
};
