import ScreenWrapper from "@/components/ScreenWrapper";
import { Colors } from "@/constants/theme";
import React, { useEffect } from "react";
import Animated, {
  FadeInDown,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { useAuth } from "@/api/useAuth";
import Typo from "@/components/Typo";
import { StyleSheet, useColorScheme } from "react-native";

const index = () => {
  const colorScheme = useColorScheme();
  const marginTop = useSharedValue(274);
  const opacity = useSharedValue(0);
  const { loadToken } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      marginTop.value = withSpring(144);
      opacity.value = withSpring(1);
    }, 500);

    loadToken();

    return () => clearTimeout(timer);
  }, []);

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
        entering={FadeInDown.duration(300).springify()}
        style={[styles.logo, { marginTop }]}
        resizeMode="contain"
      />
      <Animated.View style={{ opacity }}>
        <Typo
          style={{
            color: Colors.primaryWhite,
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          BYTE BITES
        </Typo>
      </Animated.View>
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  logo: {
    height: "23%",
    aspectRatio: 0.9,
  },
});
