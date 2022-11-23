import { ASSIGN_USERS, DROPDOWN_STATUS, TASKS } from "../constants";

export function assignUser(obj) {
  return {
    type: ASSIGN_USERS,
    payload: obj,
  };
}

export function dropdownStatus(str) {
  return {
    type: DROPDOWN_STATUS,
    payload: str,
  };
}

export function tasks(arr) {
  return {
    type: TASKS,
    payload: arr,
  };
}
