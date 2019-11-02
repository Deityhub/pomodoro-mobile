//This is a solution found on stackoverflow
//that helps to solve the unexpected behaviour of react-native-background-timer
// for reference purpose https://stackoverflow.com/questions/54833140/react-native-background-timer-never-stops

import {
  DeviceEventEmitter,
  NativeAppEventEmitter,
  Platform
} from "react-native";
import _BackgroundTimer from "react-native-background-timer";

const EventEmitter = Platform.select({
  ios: () => NativeAppEventEmitter,
  android: () => DeviceEventEmitter
})();

class BackgroundTimer {
  static setInterval(callback, delay) {
    _BackgroundTimer.start();
    this.backgroundListener = EventEmitter.addListener(
      "backgroundTimer",
      () => {
        this.backgroundTimer = _BackgroundTimer.setInterval(callback, delay);
      }
    );
    return this.backgroundListener;
  }

  static clearInterval(timer) {
    if (timer) timer.remove();
    if (this.backgroundTimer)
      _BackgroundTimer.clearInterval(this.backgroundTimer);
    _BackgroundTimer.stop();
  }
}

export default BackgroundTimer;