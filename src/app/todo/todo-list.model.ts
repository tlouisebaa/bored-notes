import { TodoItem } from "./todo-item/todo-item.model";

export class TodoList {
  name: string;
  items?: TodoItem[];

  constructor(name: string, items?: TodoItem[]) {
    this.name = name;
    this.items = items;
  }
}
