import { verticalScale } from "@/utils/styling";

export const Colors = {
  primary: "#ff6347",
  primaryWhite: "#ffffff",
  primaryText: "#6D6C69",
  text: "#0d1217",
  lightBg: "#1F2A37",
  yellow: "#FFC700",
  green: "#13c296",
  light: {
    text: "#ff6347",
    secondaryText: "#697079",
    darkText: "#0d1217",

    background: "#ffffff",
    secondaryBackground: "#f5f5f5",

    buttonBackground: "#ff6347",
    buttonText: "#ffffff",
    border: "#e9eaeb",
    focusedBorder: "#babdc1",
    placeholderText: "#a0a0a0",
    inputBackground: "#e9eaeb",
  },
  dark: {
    text: "#697079",
    secondaryText: "#ffffff",
    darkText: "#babdc1",

    background: "#0d1217",
    secondaryBackground: "#ff6347",

    border: "#4c555f",
    buttonBackground: "#ff6347",
    buttonText: "#ffffff",
    placeholderText: "#888888",
    inputBackground: "#4c555f",
    focusedBorder: "#ffffff",
  },
};

export const spacingY = {
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
  _50: verticalScale(50),
  _60: verticalScale(60),
};

export const radius = {
  _3: verticalScale(3),
  _6: verticalScale(6),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _30: verticalScale(30),
  _40: verticalScale(40),
  _50: verticalScale(50),
  _60: verticalScale(60),
  _70: verticalScale(70),
  _80: verticalScale(80),
  _90: verticalScale(90),
  full: 200,
};
