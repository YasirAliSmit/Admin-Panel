import axios from "axios";
import { useDispatch } from "react-redux";
export const FETCH_USER_LIST = "FETCH_USER_LIST";
//const dispatch = useDispatch()
const fetchUsersList = (users) => {
  return {
    type: FETCH_USER_LIST,
    payload: users,
  };
};


export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=1"); 
    const users = response.data.data; 
   // console.log(users);

    dispatch(fetchUsersList(users)); // Dispatch the action with the fetched data
  } catch (error) {
    console.log("Error while fetching user list from API", error);
  }
};