import { UserList } from "../../model/user-list";
import { UserAction, UserActionTypes } from "../actions/user.actions";

const initialState: Array<UserList> = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com',
    monthlyBudget: 4000,
    number: 9999999999
  }
];

export function UserReducer(state: Array<UserList> = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}