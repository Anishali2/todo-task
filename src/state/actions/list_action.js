import { SWITCH_TAB } from "../constants";

export function switchNum(num) {
  return {
    type: SWITCH_TAB,
    payload: num,
  };
}
