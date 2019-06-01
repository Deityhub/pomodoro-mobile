import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { EnhancedText } from "./commons";

const Control = ({ title }) => (
  <View style={styles.container}>
    <EnhancedText color="#fff" size="25">
      {title}
    </EnhancedText>

    <View style={styles.controlWrapper}>
      <TouchableOpacity style={styles.controlBtn}>
        <EnhancedText color="#fff" size="25">
          +
        </EnhancedText>
      </TouchableOpacity>
      <EnhancedText color="#fff" size="20">
        5 min
      </EnhancedText>
      <TouchableOpacity style={styles.controlBtn}>
        <EnhancedText color="#fff" size="25">
          -
        </EnhancedText>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: "green",
    borderWidth: 2,
    width: "45%",
    height: "70%",
    backgroundColor: "#91b8d4",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#60ffaa",
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    justifyContent: "space-evenly"
  },
  controlWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  controlBtn: {
    backgroundColor: "#ff8080",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#80ffaa",
    width: 40,
    height: 40,
    justifyContent: "center",
    borderRadius: 5
  }
});

export default Control;
