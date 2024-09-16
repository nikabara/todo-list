import { TodoCategory } from './../shared/todoItem';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../shared/todoItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos : TodoItem[] = [
    new TodoItem("hey", "hello", TodoCategory.Reminder, new Date(2024, 9, 17))
  ];
  title = 'todo-list';
}
