import { DRAWER, SWITCH_TAB, TASK_MODAL } from "../constants";

const initialState = {
  tabIndex: 0,
  drawer: false,
  taskModal: true,
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case SWITCH_TAB: {
      return {
        ...state,
        tabIndex: action.payload,
      };
    }
    case DRAWER: {
      return {
        ...state,
        drawer: action.payload,
      };
    }
    case TASK_MODAL: {
      return {
        ...state,
        taskModal: action.payload,
      };
    }
    default:
      return state;
  }
}
