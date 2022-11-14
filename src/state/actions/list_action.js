import { DRAWER, SWITCH_TAB } from "../constants";

export function switchNum(num) {
  return {
    type: SWITCH_TAB,
    payload: num,
  };
}
export function openDrawer(bol) {
  return {
    type: DRAWER,
    payload: bol,
  };
}
