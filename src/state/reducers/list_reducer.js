import { DRAWER, SWITCH_TAB } from "../constants";

const initialState = {
  tabIndex: 0,
  drawer: false,
};

export default function list(state = initialState, action) {
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
    default:
      return state;
  }
}
