import { Component } from '@angular/core';
import { TableHeader } from './dynamic-table/table-header.type';
import { users } from './users.data';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-table';

  data : User[] = users;
  tableHeaders: TableHeader[] = [
    {
      key: 'id',
      label: 'ID'
    },
    {
      key: 'name',
      label: 'Full Name'
    },
    {
      key: 'email',
      label: 'Email Address'
    },
    {
      key: 'status',
      label: 'Is Active'
    }
  ]
}
