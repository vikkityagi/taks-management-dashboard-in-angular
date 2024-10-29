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
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'; 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PriorityHighlightDirective,
    TaskStatusPipe,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeModule,
    TaskModule,
    UserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
