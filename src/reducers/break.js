import {
  START_BREAK,
  PAUSE_BREAK,
  RENEW_BREAK,
  INC_BREAK,
  DEC_BREAK
} from "../actions/action-types";
import secondsToHms from "../lib/hmsConverter";

const initialState = {
  breakLength: 5,
  currentBreakLength: 5 * 60,
  breakTimeLeft: secondsToHms(5 * 60),
  runTimer: false,
  isBreak: false
};

const breakReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_BREAK:
      let workingState = { ...state };
      let currentBreakLength = workingState.currentBreakLength;
      currentBreakLength -= 1;

      return {
        ...state,
        runTimer: true,
        breakTimeLeft: secondsToHms(currentBreakLength),
        currentBreakLength,
        isBreak: true
      };
    case PAUSE_BREAK:
      return { ...state, runTimer: false };
    case RENEW_BREAK:
      return {
        ...state,
        currentBreakLength: state.breakLength * 60,
        breakTimeLeft: secondsToHms(state.breakLength * 60),
        runTimer: false,
        isBreak: false
      };
    case INC_BREAK:
      let incWorkingState = { ...state };
      let incBreakLength = incWorkingState.breakLength;
      if (incBreakLength < 60) incBreakLength += 1;

      let incCurrentBreakLength = incBreakLength * 60;

      return {
        ...state,
        breakLength: incBreakLength,
        currentBreakLength: incCurrentBreakLength,
        breakTimeLeft: secondsToHms(incCurrentBreakLength)
      };
    case DEC_BREAK:
      let decWorkingState = { ...state };
      let decBreakLength = decWorkingState.breakLength;
      if (decBreakLength > 1) decBreakLength -= 1;

      let decCurrentBreakLength = decBreakLength * 60;

      return {
        ...state,
        breakLength: decBreakLength,
        currentBreakLength: decCurrentBreakLength,
        breakTimeLeft: secondsToHms(decCurrentBreakLength)
      };
    default:
      return state;
  }
};

export default breakReducer;
