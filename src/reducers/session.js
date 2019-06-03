import {
  START_SESSION,
  PAUSE_SESSION,
  RENEW_SESSION
} from "../actions/action-types";
import secondsToHms from "../lib/hmsConverter";

const initialState = {
  sessionLength: 1,
  currentSessionLength: 1 * 60,
  sessionTimeLeft: secondsToHms(1 * 60),
  runTimer: false,
  isBreak: false
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SESSION:
      let workingState = { ...state };
      let currentSessionLength = workingState.currentSessionLength;
      currentSessionLength -= 1;

      return {
        ...state,
        runTimer: true,
        sessionTimeLeft: secondsToHms(currentSessionLength),
        currentSessionLength,
        isBreak: false
      };
    case PAUSE_SESSION:
      return { ...state, runTimer: false };
    case RENEW_SESSION:
      return {
        ...state,
        currentSessionLength: state.sessionLength * 60,
        sessionTimeLeft: secondsToHms(state.sessionLength * 60),
        runTimer: false,
        isBreak: true
      };
    default:
      return state;
  }
};

export default sessionReducer;
