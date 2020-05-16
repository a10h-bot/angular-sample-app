import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit(): void {

    this.todos = [{
      id: 10,
      title: 'David',
      Completed: false

    },
    {
      id: 11,
      title: 'David',
      Completed: false

    },
    {
      id: 12,
      title: 'David',
      Completed: false

    },

    ]
  }
}
