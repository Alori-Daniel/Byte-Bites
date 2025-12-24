import ScreenWrapper from "@/components/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const selectcountry = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} />
      </TouchableOpacity>
      <Text>Select Country</Text>
    </ScreenWrapper>
  );
};

export default selectcountry;

const styles = StyleSheet.create({});
