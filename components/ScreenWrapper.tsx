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
  let paddingBottom = Platform.OS === "ios" ? height * 0.03 : 20;

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
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
