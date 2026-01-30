import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { transactionOrders } from "@/constants/data";
import { Colors, radius } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const data = ["All", "Active", "Completed", "Cancelled"];
const orders = () => {
  const [selected, setSelected] = useState("All");

  const filteredOrder = transactionOrders.filter((item) => {
    if (selected === "All") {
      return item;
    }
    return item.status === selected;
  });

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.itemOrder}>
        <Image source={item.image} style={{ width: 105, height: 75 }} />
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Typo size={12} color={Colors.text}>
              Order ID:
            </Typo>
            <Typo size={12} fontWeight={"500"} color={Colors.text}>
              {item.name}
            </Typo>
          </View>
          <Typo color={Colors.primary} fontWeight={"500"} size={14}>
            $ {item.price}.00
          </Typo>
          <View style={{ flexDirection: "row", gap: 1 }}>
            {new Array(5).fill("").map((item, index) => (
              <View key={index}>
                <Ionicons name="star" size={16} color={Colors.yellow} />
              </View>
            ))}
          </View>
        </View>

        <Typo
          size={11}
          fontWeight={"300"}
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            padding: 5,
            borderRadius: radius._12,
            borderColor: Colors.light.focusedBorder,
          }}
          color={
            item.status === "Completed"
              ? Colors.green
              : item.status === "Cancelled"
                ? Colors.primaryText
                : Colors.primary
          }
        >
          {item.status}
        </Typo>
      </TouchableOpacity>
    );
  };

  console.log("ff", filteredOrder);

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
          Orders
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

      <View style={{ marginTop: 10 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            flexDirection: "row",
            flexGrow: 1,
            gap: 15,
          }}
        >
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                key={index}
                style={{
                  backgroundColor:
                    selected === item ? Colors.primary : Colors.light.border,
                  padding: 7,
                  minWidth: 69,
                  paddingHorizontal: 10,
                  borderRadius: radius._6,
                }}
              >
                <Typo
                  size={12}
                  fontWeight={"400"}
                  style={{ textAlign: "center" }}
                  color={selected === item ? Colors.primaryWhite : Colors.text}
                >
                  {item}
                </Typo>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={{ flex: 1, marginTop: 10 }}>
        <FlatList
          data={filteredOrder}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ gap: 15 }}
          ListEmptyComponent={() => (
            <View
              style={{
                marginTop: 30,
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="file-tray-full-outline"
                size={50}
                color={Colors.light.focusedBorder}
              />
              <Typo
                size={20}
                style={{ textAlign: "center" }}
                color={Colors.light.focusedBorder}
              >
                No Transactions Found
              </Typo>
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default orders;

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
