import React from "react";
import { Text } from "react-native";

const EnhancedText = ({
  style,
  children,
  color = "black",
  size = 16,
  position = "center"
}) => (
  <Text
    style={[
      { fontSize: Number(size), color: color, textAlign: position },
      style
    ]}
  >
    {children}
  </Text>
);

export { EnhancedText };
