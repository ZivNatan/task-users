import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './in-memory-data.service';
import { UsersTableComponent } from './componetns/users/users-table/users-table.component';
import { TaskListComponent } from './componetns/tasks/tasks-list/tasks-list.component';
import { TaskCardComponent } from './componetns/tasks/task-card/task-card.component';
import { MockDataService } from './services/mockDataService';
import { UpdateUserComponent } from './componetns/users/update-user/update-user.component';
import { AddUserComponent } from './componetns/users/add-user/add-user.component';





@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    TaskListComponent,
    TaskCardComponent,
    UpdateUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 500 }),
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
