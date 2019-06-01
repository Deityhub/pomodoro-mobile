import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Title from "./Title";
import Timer from "./Timer";
import Control from "./Control";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Timer />

        <View style={styles.controlContainer}>
          <Control title="Break time" />
          <Control title="Work time" />
        </View>
      </View>
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
