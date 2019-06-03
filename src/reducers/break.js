import { START_BREAK, PAUSE_BREAK, RENEW_BREAK } from "../actions/action-types";
import secondsToHms from "../lib/hmsConverter";

const initialState = {
  breakLength: 1,
  currentBreakLength: 1 * 60,
  breakTimeLeft: secondsToHms(1 * 60),
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
    default:
      return state;
  }
};

export default breakReducer;
