import Button from "@/components/Button";
import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { Colors, radius } from "@/constants/theme";
import useCountryStore from "@/store/countryStore";
import { scale, verticalScale } from "@/utils/styling";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";

const register = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

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
            Registration
          </Typo>
          <View style={{ gap: 24 }}>
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

            <Input
              icon={
                <Ionicons
                  name="mail"
                  size={20}
                  style={{ marginLeft: 12 }}
                  color={theme.darkText}
                />
              }
              placeholder="Enter email"
              value={email}
              containerStyle={{ height: 56 }}
              onChangeText={setEmail}
              keyboardType="email-address"
              returnKeyType="done"
              style={{ width: "100%" }}
            />

            <Input
              icon={
                <Ionicons
                  name="person"
                  size={20}
                  style={{ marginLeft: 12 }}
                  color={theme.darkText}
                />
              }
              placeholder="Enter Full Name"
              value={fullName}
              containerStyle={{ height: 56 }}
              onChangeText={setFullName}
              keyboardType="default"
              returnKeyType="done"
              style={{ width: "100%" }}
            />
          </View>
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
              opacity: phoneNumber && email && fullName ? 1 : 0.4,
              width: "100%",
            }}
            onPress={() =>
              console.log(
                "Register pressed",
                country?.callingCode + phoneNumber,
                email,
                fullName
              )
            }
            disabled={false}
          >
            <Typo
              style={{ color: theme.buttonText }}
              fontWeight={600}
              size={18}
            >
              Register
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
          <Typo color={Colors.primaryText}>Or sign up with</Typo>
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
            ></TouchableOpacity>
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
          <Typo color={theme.darkText}>Already have an account?</Typo>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Typo color={Colors.primary}>Login</Typo>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default register;

const styles = StyleSheet.create({});
