import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TASKS } from './Tasks.fake'

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit() { }

  onSelect(task: Task): void {
    task.isOn = true;    
  }

  onSave(task: Task): void {
    task.isOn = false;   
  }
}