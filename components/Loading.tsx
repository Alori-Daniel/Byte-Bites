import { Colors } from "@/constants/theme";
import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
const Loading = ({ size = "large", color }: ActivityIndicatorProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];

  const style = {
    color: color || theme.text,
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={style.color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
