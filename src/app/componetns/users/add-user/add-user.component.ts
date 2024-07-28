import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces';


@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  user: User = { id: 0, name: '', email: '' };

  constructor(public dialogRef: MatDialogRef<AddUserComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addUser(): void {
    this.user.id = Math.floor(Math.random() * 1000); // Generate a random ID
    this.dialogRef.close(this.user);
  }
}
