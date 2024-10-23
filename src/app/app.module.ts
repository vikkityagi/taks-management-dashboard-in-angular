import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskRoutingModule } from './task/task-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { PriorityHighlightDirective } from './directives/priority-highlight.directive';
import { TaskStatusPipe } from './pipes/task-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PriorityHighlightDirective,
    TaskStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeModule,
    TaskModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
