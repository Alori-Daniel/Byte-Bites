import React from "react";
import { StyleSheet, TextInput, useColorScheme, View } from "react-native";
// import { InputProps } from "@/types";
import { Colors, radius, spacingY } from "@/constants/theme";
import { InputProps } from "@/types";
import { verticalScale } from "@/utils/styling";

type Theme = (typeof Colors)["light"];

const Input = (props: InputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];
  const styles = createStyles(theme);

  return (
    <View
      style={[
        styles.container,
        props.containerStyle && props.containerStyle,
        isFocused && styles.primaryBorder,
      ]}
    >
      {props.icon && props.icon}
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={theme.text}
        ref={props.inputRef && props.inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

export default Input;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      height: verticalScale(48),
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: radius._6,
      borderCurve: "continuous",
      paddingHorizontal: spacingY._15,
      backgroundColor: theme.background,
      gap: spacingY._10,
    },
    primaryBorder: {
      borderColor: Colors.primary,
    },
    input: {
      flex: 1,
      color: theme.text,
      fontSize: verticalScale(13),
    },
  });
