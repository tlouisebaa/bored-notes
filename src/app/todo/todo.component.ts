import { Component } from '@angular/core';
import { TodoItem } from './todo-item/todo-item.model';
import { TodoList } from './todo-list.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  list: TodoList[] = [
    // new TodoList(
    //   'Backlog',
    //   [
    //     new TodoItem(
    //       'Create a portfolio',
    //       'Create a todo app in Angular',
    //       'Important'
    //     ),
    //     new TodoItem(
    //       'Design todo app',
    //       'Make a wireframe in figma',
    //       'Most Important'
    //     )
    //   ]
    // ),
    // new TodoList(
    //   'In Progress',
    //   [
    //     new TodoItem(
    //       'Design todo app',
    //       'Make a wireframe in figma',
    //       'Most Important'
    //     )
    //   ]
    // ),
    // new TodoList(
    //   'Completed',
    //   [

    //   ]
    // )
  ];

  onAddedList(todoList: TodoList) {
    this.list.push(todoList);
  }

}
