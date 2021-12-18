import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import {UiService} from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();


  text: string;
  day : string;
  reminder : boolean = false;

  showAddTask : boolean;
  subscription : Subscription;


  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(res=>{
      this.showAddTask = res;
    });
   }

  ngOnInit(): void {
  }

  onSubmit() : void
  {
    if(!this.text)
    {
      alert("Please add text!");
      return;
    }

    const newTask = {
      text: this.text,
      day : this.day,
      reminder : this.reminder
    }

    this.onAddTask.emit(newTask);


    this.text = "";
    this.day = "";
    this.reminder = false;

  }

}
