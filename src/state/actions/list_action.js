import { DRAWER, SWITCH_TAB, TASK_MODAL } from "../constants";

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
export function showTaskModal(bol) {
  return {
    type: TASK_MODAL,
    payload: bol,
  };
}
