// Angular
import { Component, OnInit, ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'kt-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
