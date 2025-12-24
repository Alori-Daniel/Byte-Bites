import { Colors, radius } from "@/constants/theme";
import { ButtonProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import Loading from "./Loading";

type Theme = (typeof Colors)["light"];

const Button = ({ style, onPress, children, loading = false }: ButtonProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];
  const styles = createStyles(theme);
  if (loading) {
    return (
      <View style={[styles.button, style, { backgroundColor: "transparent" }]}>
        <Loading />
      </View>
    );
  }
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.background,
      padding: 10,
      borderRadius: radius.full,
      borderCurve: "continuous",
      height: verticalScale(56),
      justifyContent: "center",
      alignItems: "center",
    },
  });
