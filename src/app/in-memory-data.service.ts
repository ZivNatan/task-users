import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb() {
    const users = [
      { id: 1, name: 'john doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
    ];

    const tasks = [
      { id: 1, userId: 1, userName: 'John Doe', title: 'Task 1 very long title, so long that you cannot see the end!', description: 'Task 1 description',   created:new Date(), dueDate: new Date(), status: 'In Progress' },
      { id: 2, userId: 1, userName: 'Jane Smith', title: 'Task 2', 
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',  
      created:new Date(), dueDate: new Date(), status: 'Done' },




      { id: 1, userId: 1, userName: 'John Doe', title: 'Task 1 very long title, so long that you cannot see the end!', description: 'Task 1 description',   created:new Date(), dueDate: new Date(), status: 'In Progress' },
      { id: 2, userId: 1, userName: 'Jane Smith', title: 'Task 2', 
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',  
      created:new Date(), dueDate: new Date(), status: 'Done' },
      { id: 1, userId: 1, userName: 'John Doe', title: 'Task 1 very long title, so long that you cannot see the end!', description: 'Task 1 description',   created:new Date(), dueDate: new Date(), status: 'In Progress' },
      { id: 2, userId: 1, userName: 'Jane Smith', title: 'Task 2', 
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',  
      created:new Date(), dueDate: new Date(), status: 'Done' },





      { id: 3, userId: 2, userName: 'Jane Smith', title: 'Task 3',description: 'Task 3 description',  created:new Date(), dueDate: new Date(), status: 'overdue' }

    ];

    return { users, tasks };
  }
}
