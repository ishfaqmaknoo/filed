import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../global/model/app-state.model';
import { UserList } from '../global/model/user-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userList$: Observable<Array<UserList>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userList$ = this.store.select(store => store.users);
    console.log(this.userList$ , 'userlist')
  }

}
