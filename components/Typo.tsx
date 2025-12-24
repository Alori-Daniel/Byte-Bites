import React from "react";
import { Text, TextStyle, useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

interface TypoProps {
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  textProps?: Omit<TextStyle, "style" | "children">;
}

const Typo = ({
  size = 16,
  color,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const textStyle: TextStyle = {
    fontSize: verticalScale(size),
    color: color || theme.text,
    fontWeight,
  };

  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;
