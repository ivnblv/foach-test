import { SWITCH_USER_VACATION } from "../actions/types";

const initialState = {
  users: {
    0: {
      id: 0,
      name: "Phil Schiller",
      position: "Senior Vice President, Worldwide Marketing",
      onVacation: true
    },
    1: {
      id: 1,
      name: "Craig Federighi",
      position: "Senior Vice President Software Engineering",
      onVacation: false
    },
    2: {
      id: 2,
      name: "Eddy Cue",
      position: "Senior Vice President, Internet Software and Services",
      onVacation: false
    }
  }
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SWITCH_USER_VACATION:
      return {
        ...state
      };

    default:
      return state;
  }
}
