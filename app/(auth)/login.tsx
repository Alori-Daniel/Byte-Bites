import Button from "@/components/Button";
import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { Colors, radius } from "@/constants/theme";
import useCountryStore from "@/store/countryStore";
import { scale, verticalScale } from "@/utils/styling";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";

const login = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const { country } = useCountryStore();
  const router = useRouter();

  const FlagSelect = () => {
    const flag = country ? country.flag : "Select";
    const label = country ? `${country.callingCode}`.trim() : "";
    const router = useRouter();

    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
          marginLeft: 6,
        }}
        onPress={() => router.push("/(auth)/selectcountry")}
      >
        <Typo size={country?.flag ? 34 : 14} color={Colors.text}>
          {flag}
        </Typo>
        <Ionicons name="chevron-down" size={18} color={Colors.text} />
        {country && (
          <Typo color={theme.placeholderText} size={14}>
            ({label})
          </Typo>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: verticalScale(20),
        backgroundColor: theme.background,
      }}
    >
      {/* Content Section - Stays in place */}
      <View style={{ flex: 1 }}>
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: verticalScale(54),
            gap: 4,
          }}
        >
          <Typo
            style={{ marginBottom: scale(10) }}
            size={28}
            color={Colors.primary}
            fontWeight={600}
          >
            Login
          </Typo>

          <Input
            icon={<FlagSelect />}
            placeholder="Phone number"
            value={phoneNumber}
            containerStyle={{ height: 56 }}
            onChangeText={setPhoneNumber}
            keyboardType="number-pad"
            returnKeyType="done"
            style={{ width: "100%" }}
          />
        </View>
      </View>

      <View style={{ gap: 20 }}>
        <KeyboardStickyView
          offset={{ closed: 0, opened: 146 }}
          // style={{
          //   backgroundColor: theme.background,
          //   paddingBottom: verticalScale(20),
          // }}
        >
          <Button
            style={{
              backgroundColor: theme.buttonBackground,
              opacity: phoneNumber ? 1 : 0.4,
              width: "100%",
            }}
            onPress={() =>
              console.log("Login pressed", country?.callingCode + phoneNumber)
            }
            disabled={false}
          >
            <Typo
              style={{ color: theme.buttonText }}
              fontWeight={600}
              size={18}
            >
              Sign In
            </Typo>
          </Button>
        </KeyboardStickyView>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{
              height: StyleSheet.hairlineWidth,
              backgroundColor: theme.placeholderText,
              flex: 1,
            }}
          ></View>
          <Typo color={Colors.primaryText}>Or sign in with</Typo>
          <View
            style={{
              height: StyleSheet.hairlineWidth,
              backgroundColor: theme.placeholderText,
              flex: 1,
            }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[0, 1, 2].map((item) => (
            <TouchableOpacity
              key={item}
              style={{
                borderRadius: radius.full,
                height: 40,
                width: 40,
                borderWidth: 1,
                borderColor: theme.focusedBorder,
                marginHorizontal: 5,
              }}
            >
              <Ionicons name="logo-google" size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Typo color={theme.darkText}>Don't have an account?</Typo>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Typo color={Colors.primary}>Register</Typo>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({});
