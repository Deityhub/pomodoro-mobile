import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Pomodoro Timer</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 2,
    flex: 0.5,
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
    color: "#80ffaa",
    textShadowOffset: { width: 4, height: 2 },
    textShadowColor: "#646464",
    padding: 5,
    textAlign: "center"
  }
});

export default Title;
