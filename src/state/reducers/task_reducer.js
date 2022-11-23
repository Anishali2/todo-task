import { users } from "../../constants/users";
import { ASSIGN_USERS, DROPDOWN_STATUS, TASKS, TASK_MODAL } from "../constants";

const initialState = {
  users: users,
  dropdownStatus: "All",
  tasks: [],
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case ASSIGN_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case DROPDOWN_STATUS: {
      return {
        ...state,
        dropdownStatus: action.payload,
      };
    }
    case TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    default:
      return state;
  }
}
