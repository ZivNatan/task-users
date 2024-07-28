  import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../interfaces'
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  providers: [DatePipe] 
})
export class TaskCardComponent implements OnInit {
  @Input() task!: Task;
  tasks: any[] = [];

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
   
  }

  getStatusColor(status:string){
    if(status.toLowerCase() =='overdue'){
      return 'red'

    }else if(status.toLowerCase() =='in progress'){

      return 'orange'
    }else if(status.toLowerCase() =='done'){
       return 'green'
    }
    return 'black'

  }

  formattedDate (date:Date){
    return this.datePipe.transform(date, 'dd-MMM-yyyy'); 

  }
}
