
import { FETCH_USER_LIST } from "./Action";

// Initial state with an empty list of users
const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
    console.log(action.type,'this is action typej')
  switch (action.type) {
    case FETCH_USER_LIST:
      // When a new user is added, create a new state object with the updated users list
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default usersReducer;
