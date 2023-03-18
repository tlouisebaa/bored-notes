import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item.model';
import { TodoList } from '../todo-list.model';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.css']
})
export class EditTodoListComponent {
  @ViewChild('listNameInput') listNameInput!: ElementRef;
  @Output() addedList = new EventEmitter<TodoList>();
  isAddList: boolean = false;

  onAddList() {
    this.isAddList = false;
    this.addedList.emit(new TodoList(this.listNameInput.nativeElement.value));
  }
}
