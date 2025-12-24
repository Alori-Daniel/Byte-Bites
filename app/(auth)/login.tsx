import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { verticalScale } from "@/utils/styling";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const FlagSelect = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{ borderWidth: 1, marginLeft: 24 }}
      onPress={() => router.push("/(auth)/selectcountry")}
    >
      <Typo>Flag</Typo>
    </TouchableOpacity>
  );
};

const login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper
      style={{
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        paddingHorizontal: verticalScale(20),
        borderWidth: 1,
      }}
    >
      <View>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: verticalScale(54),
          borderWidth: 1,
          gap: 4,
        }}
      >
        <Typo style={{}} size={30} fontWeight={600}>
          Login
        </Typo>

        <Input
          icon={<FlagSelect />}
          placeholder="Phone number"
          style={{ width: "100%" }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({});
