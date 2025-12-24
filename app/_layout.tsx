import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen"; // Uncommented
import React, { useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Colors } from "../constants/theme";

export function RootLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const [fontsLoaded] = useFonts({
    "Roboto-r": require("../assets/Fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(onboarding)/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

const _layout = () => {
  return (
    <KeyboardProvider preload={false}>
      <RootLayout />
    </KeyboardProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
