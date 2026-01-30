import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { notifications } from "@/constants/data";
import { Colors, radius } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  unread?: boolean;
}

const notification = () => {
  const renderItem = ({ item }: { item: Notification }) => {
    return (
      <TouchableOpacity style={{}}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <View
            style={[
              {
                backgroundColor: item.iconBg,
                padding: 10,
                borderRadius: radius.full,
              },
            ]}
          >
            <Ionicons
              name={item.icon as any}
              size={24}
              color={item.iconColor}
            />
          </View>

          <View style={{}}>
            <Typo color={Colors.text} fontWeight={"400"} size={16} style={{}}>
              {item.title}
            </Typo>
            <Typo color={Colors.text} size={12} style={{}}>
              {item.description}
            </Typo>
          </View>
          {item.unread && <View style={{}} />}
        </View>

        <Typo
          size={12}
          fontWeight={"300"}
          color={Colors.primaryText}
          style={{ alignSelf: "flex-end" }}
        >
          {item.time}
        </Typo>
      </TouchableOpacity>
    );
  };
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
          Notification
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
        placeholder="Get"
      />

      <View style={{ flex: 1, marginTop: 10 }}>
        <Typo color={Colors.text} style={{ marginBottom: 10 }}>
          Today
        </Typo>

        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ gap: 15 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default notification;

const styles = StyleSheet.create({});
