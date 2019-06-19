import {
  START_SESSION,
  START_BREAK,
  PAUSE_BREAK,
  PAUSE_SESSION,
  RENEW_BREAK,
  RENEW_SESSION,
  INC_BREAK,
  INC_SESSION,
  DEC_BREAK,
  DEC_SESSION
} from "./action-types";

export const startSession = () => ({
  type: START_SESSION
});

export const pauseSession = () => ({
  type: PAUSE_SESSION
});

export const renewSession = () => ({
  type: RENEW_SESSION
});

export const incSession = () => ({
  type: INC_SESSION
});

export const decSession = () => ({
  type: DEC_SESSION
});

export const startBreak = () => ({
  type: START_BREAK
});

export const pauseBreak = () => ({
  type: PAUSE_BREAK
});

export const renewBreak = () => ({
  type: RENEW_BREAK
});

export const incBreak = () => ({
  type: INC_BREAK
});

export const decBreak = () => ({
  type: DEC_BREAK
});
