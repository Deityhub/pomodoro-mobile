import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import store from "../store/index";
import Title from "./Title";
import Timer from "./Timer";
import Control from "./Control";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Title />
          <Timer />

          <View style={styles.controlContainer}>
            <Control title="Break time" control="break" />
            <Control title="Work time" control="session" />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6f8"
  },
  controlContainer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
