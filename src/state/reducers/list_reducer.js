import { SWITCH_TAB } from "../constants";

const initialState = {
  // Initial State
  tabIndex: 0,
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case SWITCH_TAB: {
      return {
        tabIndex: action.payload,
      };
    }
    default:
      return state;
  }
}
