import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
