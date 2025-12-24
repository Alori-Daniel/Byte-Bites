import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
const index = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];
  return (
    <ScreenWrapper style={{ backgroundColor: theme.background }}>
      <Typo>Hello</Typo>
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({});
