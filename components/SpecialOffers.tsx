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

const SpecialOffers = () => {
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
        <View style={{ alignItems: "center" }}>
          <Image source={item.image} />
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Typo fontWeight={600} size={16} color={Colors.text}>
          Special Offers
        </Typo>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Typo fontWeight={600} size={16} color={Colors.primary}>
            View All
          </Typo>
          <Ionicons
            name="chevron-forward-outline"
            size={16}
            color={Colors.primary}
          />
        </View>
      </View>

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

export default SpecialOffers;

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
