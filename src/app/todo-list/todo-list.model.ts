import { TodoItem } from "./todo-item/todo-item.model";

export class TodoList {
  constructor(public name: string, public item: TodoItem) {}
}
