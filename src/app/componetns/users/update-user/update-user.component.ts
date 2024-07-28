import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces';



@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  user: User;

  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
    this.user = { ...data.user }; // Copy data to avoid mutating original
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateUser(): void {
    this.dialogRef.close(this.user);
  }
}
