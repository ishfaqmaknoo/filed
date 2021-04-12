import { Action } from '@ngrx/store'
import { UserList } from '../../model/user-list';

export enum UserActionTypes {
  ADD_USER = '[USER] Add User',
  // ADD_USER_SUCCESS = '[USER] Add User Success',
  // ADD_USER_FAIL = '[USER] Add User Fail',
  
  // GET_USERS = '[USER] Get Users',
  // GET_USERS_SUCCESS = '[USER] Get Users Success',
  // GET_USERS_FAIL = '[USER] Get Users Fail'
}

export class AddUsersAction implements Action{
  readonly type = UserActionTypes.ADD_USER;
  constructor(public payload: UserList){}
}

// export class GetUsersSuccessAction implements Action {
//   readonly type = UserActionTypes.GET_USERS_SUCCESS;
//   constructor(public payload: UserList[]){}
// }

// export class GetUsersFailAction implements Action {
//   readonly type = UserActionTypes.GET_USERS_FAIL;
//   constructor(public payload: any){}
// }

export type UserAction = AddUsersAction;



