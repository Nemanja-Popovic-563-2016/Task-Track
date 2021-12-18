import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task : Task;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {

    console.log(this.task);

  }


  deleteTask(task : Task):void{

    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void
  {
    console.log("aaaa")
    this.onToggleReminder.emit(task);
  }

}
