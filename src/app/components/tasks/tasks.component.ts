import { Component, OnInit } from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks : Task[] = [];

  constructor(private taskServie : TaskService ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() : void
  {
   this.taskServie.getTasks().subscribe(res=>{
     this.tasks=res;
   });
  }

  onDeleteTask(task:Task):void
  {
    this.taskServie.deleteTask(task).subscribe(res=>
      {
        console.log(res);
        this.loadAll();
      })
  }

  toggleReminder(task: Task): void
  {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskServie.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task)
  {
    this.taskServie.addTask(task).subscribe(res=>{
      this.loadAll();
    })
  }

}
