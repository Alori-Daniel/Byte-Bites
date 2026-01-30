import { specialOffer } from "@/constants/data";
import { Colors, radius } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Typo from "./Typo";

const Liked = () => {
  const router = useRouter();
  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() =>
          router.push({
            pathname: "/details",
            params: {
              image: item.image,
              name: item.name,
              rating: item.rating,
              price: item.price,
              discount: item.discount,
            },
          })
        }
      >
        <View style={{ alignItems: "center", position: "relative" }}>
          <Image source={item.image} />

          <TouchableOpacity
            style={{
              position: "absolute",
              borderRadius: radius.full,
              padding: 5,
              top: 6,
              right: 10,
              backgroundColor: Colors.primaryWhite,
            }}
          >
            <Ionicons name="heart" size={16} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        <Typo color={Colors.text} fontWeight={"600"} size={12}>
          {item.name}
        </Typo>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Ionicons name="star" size={16} color={Colors.yellow} />
          <Typo size={14} color={Colors.text}>
            {item.rating}
          </Typo>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Typo
            style={{ textDecorationLine: "line-through" }}
            color={Colors.primaryText}
          >
            $ {item.price}.00
          </Typo>
          <Typo>${item.discount}.00</Typo>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={specialOffer}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
        }}
        columnWrapperStyle={{
          gap: 10,

          justifyContent: "space-between",
        }}
        keyExtractor={(item, index) => `${index.toString()}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    // alignItems: "center",
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 17,

    backgroundColor: Colors.primaryWhite,
    borderRadius: radius._6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.05,
  },
});
