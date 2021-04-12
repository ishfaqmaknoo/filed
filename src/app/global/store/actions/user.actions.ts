import { Action } from '@ngrx/store'
import { UserList } from '../../model/user-list';

export enum UserActionTypes {
  ADD_USER = '[USER] Add User',
}

export class AddUsersAction implements Action{
  readonly type = UserActionTypes.ADD_USER;
  constructor(public payload: UserList){}
}

export type UserAction = AddUsersAction;



