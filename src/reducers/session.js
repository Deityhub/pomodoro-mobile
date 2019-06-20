import {
  START_SESSION,
  PAUSE_SESSION,
  RENEW_SESSION,
  INC_SESSION,
  DEC_SESSION
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
      let startWorkingState = { ...state };
      let startCurrentSessionLength = startWorkingState.currentSessionLength;
      startCurrentSessionLength -= 1;

      return {
        ...state,
        runTimer: true,
        sessionTimeLeft: secondsToHms(startCurrentSessionLength),
        currentSessionLength: startCurrentSessionLength,
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
    case INC_SESSION:
      let incWorkingState = { ...state };
      let incSessionLength = incWorkingState.sessionLength;
      if (incSessionLength < 60) incSessionLength += 1;

      let incCurrentSessionLength = incSessionLength * 60;

      return {
        ...state,
        sessionLength: incSessionLength,
        currentSessionLength: incCurrentSessionLength,
        sessionTimeLeft: secondsToHms(incCurrentSessionLength)
      };
    case DEC_SESSION:
      let decWorkingState = { ...state };
      let decSessionLength = decWorkingState.sessionLength;
      if (decSessionLength > 1) decSessionLength -= 1;

      let decCurrentSessionLength = decSessionLength * 60;

      return {
        ...state,
        sessionLength: decSessionLength,
        currentSessionLength: decCurrentSessionLength,
        sessionTimeLeft: secondsToHms(decCurrentSessionLength)
      };
    default:
      return state;
  }
};

export default sessionReducer;
