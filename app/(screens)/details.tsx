import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { Colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

const details = () => {
  const { discount, image, name, price, rating } = useLocalSearchParams();
  //   console.log(params);

  const [cheese, setCheese] = useState(false);
  const [bacon, setbacon] = useState(false);

  const [meat, setMeat] = useState(false);

  const dimensions = useWindowDimensions();

  return (
    <ScreenWrapper
      style={{
        padding: 5,
        backgroundColor: Colors.primaryWhite,
        position: "relative",
      }}
    >
      <ScrollView style={{}}>
        <ImageBackground
          source={image as any}
          resizeMode="contain"
          style={{ height: 300, width: "auto", position: "relative" }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              position: "absolute",
              borderRadius: radius.full,
              padding: 10,
              top: 40,
              left: 20,
              backgroundColor: "rgba(225,225,225,0.5)",
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color={Colors.text} />
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              borderRadius: radius.full,
              padding: 10,
              bottom: 30,
              right: 20,
              backgroundColor: Colors.primaryWhite,
            }}
          >
            <Ionicons name="heart-outline" size={24} color={Colors.primary} />
          </View>
        </ImageBackground>

        <View style={{ paddingHorizontal: 20, gap: 10 }}>
          <Typo color={Colors.text} fontWeight={"600"} size={22}>
            {name}
          </Typo>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Typo
              style={{ textDecorationLine: "line-through" }}
              color={Colors.primaryText}
              size={20}
            >
              $ {price}.00
            </Typo>
            <Typo size={20}>${discount}.00</Typo>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Ionicons name="star" size={16} color={Colors.yellow} />
              <Typo size={16} color={Colors.text}>
                {rating}
              </Typo>
            </View>

            <Typo
              color={Colors.primaryText}
              style={{ textDecorationLine: "underline" }}
            >
              See all review
            </Typo>
          </View>

          <Typo fontWeight={"300"} size={16} color={Colors.light.secondaryText}>
            A delicious chicken burger served on a toasted bun with fresh
            lettuce, tomato slices, and mayonnaise. Juicy grilled chicken patty
            seasoned to perfection for a mouthwatering taste experience.
          </Typo>

          <View style={{ marginTop: 10, gap: 15 }}>
            <Typo color={Colors.text} fontWeight={"600"} size={16}>
              Additional Options:
            </Typo>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typo color={Colors.text} fontWeight={"400"} size={16}>
                Add Cheese:
              </Typo>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Typo size={14} color={Colors.text}>
                  + $0.50
                </Typo>
                <CheckBox
                  value={cheese}
                  onValueChange={() => setCheese((prev) => !prev)}
                  style={{ height: 15, width: 15 }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typo color={Colors.text} fontWeight={"400"} size={16}>
                Add Meat:
              </Typo>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Typo size={14} color={Colors.text}>
                  + $0.50
                </Typo>
                <CheckBox
                  value={meat}
                  onValueChange={() => setMeat((prev) => !prev)}
                  style={{ height: 15, width: 15 }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typo color={Colors.text} fontWeight={"400"} size={16}>
                Add Bacon:
              </Typo>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Typo size={14} color={Colors.text}>
                  + $0.50
                </Typo>
                <CheckBox
                  value={bacon}
                  onValueChange={() => setbacon((prev) => !prev)}
                  style={{ height: 15, width: 15 }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 26,
              alignItems: "center",
              //   borderWidth: 1,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 2,
                borderWidth: 1,
                borderColor: Colors.light.focusedBorder,
                borderRadius: radius.full,
              }}
            >
              <Ionicons name="remove-outline" size={25} color={Colors.text} />
            </TouchableOpacity>
            <Typo size={20} color={Colors.text} fontWeight={"400"}>
              1
            </Typo>

            <TouchableOpacity
              style={{
                padding: 2,
                borderWidth: 1,
                borderColor: Colors.light.focusedBorder,
                borderRadius: radius.full,
              }}
            >
              <Ionicons name="add" size={25} color={Colors.text} />
            </TouchableOpacity>
          </View>

          <Button
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              backgroundColor: Colors.primary,
              //   borderRadius: radius._40,
              height: verticalScale(46),
            }}
          >
            <Ionicons name="cart" size={18} color={Colors.primaryWhite} />

            <Typo
              color={Colors.primaryWhite}
              //   style={{ marginLeft: 10 }}
              size={16}
              fontWeight={"500"}
            >
              Add to Basket
            </Typo>
          </Button>
        </View>
      </Animated.View>
    </ScreenWrapper>
  );
};

export default details;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    height: 77,
    bottom: 30,
    borderRadius: radius._12,
    left: 0,
    right: 0,
    backgroundColor: Colors.primaryWhite,
    paddingVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    // borderTopColor: Colors.grey,
    // borderWidth: StyleSheet.hairlineWidth,
  },
});
