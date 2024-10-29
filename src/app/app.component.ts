import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-management-dashboard';
  drawerItem: any[] = [];

  drawerMenu(symbol: string) {
    if (this.drawerItem.length > 0)
      this.drawerItem = [];
    if (symbol == 'p') {
      this.drawerItem = [{ label: 'Add User', icon: 'menu' }, { label: 'Login User', icon: 'menu' }, { label: 'Update User', icon: 'menu' }];
    } else if (symbol == 't') {
      this.drawerItem = [{ label: 'Task1', icon: 'menu' }, { label: 'Task2', icon: 'menu' }, { label: 'Task3', icon: 'menu' }];
    }
  }


}
