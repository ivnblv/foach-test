import { SWITCH_USER_VACATION } from "./types";

export const switchUserVacation = id => ({
  type: SWITCH_USER_VACATION,
  payload: id
});
