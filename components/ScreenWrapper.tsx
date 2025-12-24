import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const { height } = Dimensions.get("window");

const ScreenWrapper = ({
  style,
  children,
}: {
  style?: ViewStyle;
  children?: React.ReactNode;
}) => {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 40;
  let paddingBottom = 0;

  return (
    <View
      style={{
        flex: 1,
        paddingTop,
        paddingBottom,
        ...style,
      }}
    >
      {children}
      <StatusBar barStyle={"light-content"} backgroundColor={"transparent"} />
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
