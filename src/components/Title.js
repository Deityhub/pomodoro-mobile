import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { EnhancedText } from "./commons";

const Title = props => (
  <View style={styles.container}>
    <EnhancedText size="30" color="#91b8d4" style={styles.text}>
      Pomodoro Timer
    </EnhancedText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center"
  },
  text: {
    fontWeight: "500",
    textShadowOffset: { width: 4, height: 2 },
    textShadowColor: "#646464",
    padding: 5
  }
});

export default Title;
