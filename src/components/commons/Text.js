import React from "react";
import { Text } from "react-native";

const EnhancedText = ({ children, color, size }) => {
  size = Number(size) || 16;
  color = color || "black";

  return <Text style={{ fontSize: size, color: color }}>{children}</Text>;
};

export { EnhancedText };
