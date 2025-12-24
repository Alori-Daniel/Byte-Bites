import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="selectcountry"
        options={{
          headerShown: false,
          presentation: "containedModal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
