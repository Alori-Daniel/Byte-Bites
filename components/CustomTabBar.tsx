import { Colors, radius } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  const { buildHref } = useLinkBuilder();

  const icons = {
    home: (props: any) => (
      <Ionicons
        name="home-outline"
        size={26}
        color={Colors.primaryText}
        {...props}
      />
    ),
    orders: (props: any) => (
      <Ionicons
        name="newspaper-outline"
        size={26}
        color={Colors.primaryText}
        {...props}
      />
    ),

    likes: (props: any) => (
      <Ionicons
        name="heart-outline"
        size={26}
        color={Colors.primaryText}
        {...props}
      />
    ),

    notification: (props: any) => (
      <Ionicons
        name="notifications-outline"
        size={26}
        color={Colors.primaryText}
        {...props}
      />
    ),

    profile: (props: any) => (
      <Ionicons
        name="person-outline"
        size={26}
        color={Colors.primaryText}
        {...props}
      />
    ),
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        // console.log(state);

        const isFocused = state.index === index;

        const yValue = useSharedValue(-50);

        useEffect(() => {
          yValue.value = withTiming(isFocused ? -50 : 0, {
            duration: 250,
          });
        }, [state.index]);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            style={styles.tabBarItem}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Animated.View
              style={{
                backgroundColor: isFocused ? Colors.primary : "transparent",
                padding: isFocused ? 15 : 0,
                borderRadius: radius.full,
                position: isFocused ? "absolute" : "relative",
                top: yValue,
              }}
            >
              {/* @ts-ignore */}
              {icons[route.name]({
                color: isFocused ? Colors.primaryWhite : Colors.primaryText,
              })}
            </Animated.View>
            <Text
              style={{
                color: isFocused ? Colors.primary : Colors.primaryText,
                fontSize: 12,
                fontWeight: "600",
                marginTop: isFocused ? 15 : 0,
              }}
            >
              {isFocused ? label : ""}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabBarItem: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    // borderWidth: 1,
    alignItems: "center",
  },
});
