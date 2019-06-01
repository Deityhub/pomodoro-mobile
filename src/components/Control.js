import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { EnhancedText } from "./commons";

const Control = props => (
  <View style={styles.container}>
    <EnhancedText color="#fff">Break time</EnhancedText>

    <View>
      <EnhancedText color="#fff">+</EnhancedText>
      <EnhancedText color="#fff">5 min</EnhancedText>
      <EnhancedText color="#fff">-</EnhancedText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: "green",
    borderWidth: 2,
    width: "40%",
    backgroundColor: "#91b8d4",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#60ffaa",
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.5
  }
});

export default Control;
