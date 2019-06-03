import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { EnhancedText } from "./commons";

const BreakTime = ({ breakTimeLeft, runBreak, pauseBreak, startBreak }) => (
  <View style={styles.timerContainer}>
    <EnhancedText color="#fff" size="40">
      {breakTimeLeft}
    </EnhancedText>

    <EnhancedText color="#fff" size="20">
      Break mode
    </EnhancedText>

    {runBreak ? (
      <TouchableOpacity style={styles.timerBtn} onPress={pauseBreak}>
        <EnhancedText color="#fff" size="30">
          Pause
        </EnhancedText>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.timerBtn} onPress={startBreak}>
        <EnhancedText color="#fff" size="30">
          Start
        </EnhancedText>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  timerContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#80ffaa",
    backgroundColor: "#ff8080",
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  timerBtn: {
    marginTop: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "#f2f6f8",
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default BreakTime;
