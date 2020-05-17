import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(todo) {
    console.log("on Toggle");

  }
  onDelete(todo) {
    console.log("On delete");

  }
}
