import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { UpdateUserComponent } from '../update-user/update-user.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { MockDataService } from 'src/app/services/mockDataService';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

  constructor(private userService: UserService, private mockDataService: MockDataService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mockDataService.addUser(result);
        this.users = this.mockDataService.getUsers();
      }
    });
  }

  openUpdateDialog(user: User): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mockDataService.updateUser(result);
        this.users = this.mockDataService.getUsers();
      }
    });
  }
}
