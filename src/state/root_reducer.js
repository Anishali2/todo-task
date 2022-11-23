import { combineReducers } from "redux";

import listReducer from "./reducers/list_reducer";

import taskReducer from "./reducers/task_reducer";
const rootReducer = combineReducers({
  // Define a top-level state field named `list`, handled by `listReducer`
  list: listReducer,
  task: taskReducer,
});

export default rootReducer;
