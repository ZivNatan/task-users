export interface Task {
    id: number;
    userId: number;
    userName: string;
    title: string;
    description: string;
    status: string;
    created: Date;
    dueDate: Date;

  }


  export interface User {
    id: number;
    name: string;
    email: string;
  }