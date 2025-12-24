import ScreenWrapper from "@/components/ScreenWrapper";
import { Colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";

import Typo from "@/components/Typo";
import { StyleSheet, useColorScheme } from "react-native";

const index = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  console.log(colorScheme);

  return (
    <ScreenWrapper
      style={{
        backgroundColor: Colors.primary,
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Animated.Image
        source={require("../assets/images/bytelogo.png")}
        entering={FadeInDown.duration(700).springify()}
        style={[styles.logo, { marginTop: 274 }]}
        resizeMode="contain"
      />
      <Typo style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
        BYTE BITES
      </Typo>
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  logo: {
    height: "23%",
    aspectRatio: 0.9,
    borderWidth: 1,
  },
});
