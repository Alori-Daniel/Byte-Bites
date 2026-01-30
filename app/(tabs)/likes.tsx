import Input from "@/components/input";
import Liked from "@/components/Liked";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { Colors, radius } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const likes = () => {
  return (
    <ScreenWrapper
      style={{ padding: 24, backgroundColor: Colors.primaryWhite }}
    >
      <View style={{ marginTop: 30, marginBottom: 20, position: "relative" }}>
        <Typo
          size={24}
          style={{ textAlign: "center" }}
          fontWeight={"600"}
          color={Colors.text}
        >
          Liked
        </Typo>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            position: "absolute",
            borderRadius: radius.full,
            padding: 10,
            top: -10,
            shadowColor: "black",
            backgroundColor: Colors.primaryWhite,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 10,
            shadowOpacity: 0.1,
          }}
        >
          <Ionicons name="arrow-back-outline" size={25} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <Input
        icon={
          <Ionicons
            name="search-outline"
            size={26}
            color={Colors.light.focusedBorder}
          />
        }
        placeholder="Search"
      />

      <Liked />
    </ScreenWrapper>
  );
};

export default likes;

const styles = StyleSheet.create({
  itemOrder: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    // borderWidth: 1,
    backgroundColor: Colors.primaryWhite,
    borderRadius: radius._6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
});
