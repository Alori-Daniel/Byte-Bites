import Banner from "@/assets/images/Banner.png";
import Banner2 from "@/assets/images/Banner2.png";

import Banner3 from "@/assets/images/Banner3.png";
import Input from "@/components/input";

import ScreenWrapper from "@/components/ScreenWrapper";
import SpecialOffers from "@/components/SpecialOffers";
import Typo from "@/components/Typo";
import { foodItems } from "@/constants/data";
import { Colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

interface foodCategory {
  name: string;
  icon: any;
}
const home = () => {
  const scrollRef = useRef<ScrollView>(null);

  const image = [Banner, Banner2, Banner3];
  const modifiedData = [...foodItems];
  // console.log("mod", modifiedData);
  // modifiedData.push({ name: "More", icon: "🍔" });

  const renderItem = ({ item }: { item: foodCategory }) => {
    // console.log("this item", item);

    return (
      <TouchableOpacity style={styles.categoryItem}>
        <Typo size={20} color={Colors.text}>
          {" "}
          {item.icon}
        </Typo>
        <Typo
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: Colors.text,
            textAlign: "center",
          }}
        >
          {item.name}
        </Typo>
      </TouchableOpacity>
    );
  };
  const ListHeaderComponent = () => {
    const dimensions = useWindowDimensions();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex <= 2) {
            scrollRef.current?.scrollTo({
              x: (nextIndex * dimensions.width) / 1.15,
            });
            return nextIndex;
          } else {
            scrollRef.current?.scrollTo({
              x: (0 * dimensions.width) / 1.15,
            });
            return 0;
          }
        });
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollPosition = e.nativeEvent.contentOffset.x;
      // console.log(scrollPosition);

      const index = Math.round(scrollPosition / (dimensions.width / 1.15));
      setActiveIndex(index);
    };

    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: verticalScale(15),
          }}
        >
          <View style={{ gap: 4 }}>
            <Typo style={{ color: Colors.text, fontWeight: 400 }}>
              Deliver to
            </Typo>
            <View
              style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
            >
              <Typo style={{ color: Colors.primaryText, fontWeight: 600 }}>
                Select Your Location
              </Typo>
              <Ionicons name="caret-down" size={20} color={Colors.primary} />
            </View>
          </View>

          <View style={styles.itemCart}>
            <Ionicons name="cart-outline" size={28} color={Colors.text} />
          </View>
        </View>

        <View style={{ height: 170, marginBottom: 20 }}>
          <ScrollView
            horizontal
            ref={scrollRef}
            onScroll={handleScroll}
            pagingEnabled
            decelerationRate={"fast"}
            scrollEventThrottle={16}
            contentContainerStyle={{
              flexDirection: "row",
            }}
            snapToInterval={dimensions.width / 1.15}
            showsHorizontalScrollIndicator={false}
          >
            {image.map((prev, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: dimensions.width / 1.15,
                    // borderWidth: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={prev}
                    style={{ width: 301, resizeMode: "contain", height: 144 }}
                  />
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignSelf: "center",
              // paddingTop: 10,
              // borderWidth: 1,
            }}
          >
            {image.map((prev, index) => {
              return (
                <View key={index} style={{}}>
                  <View
                    style={{
                      height: 6,
                      width: 16,
                      backgroundColor:
                        activeIndex === index
                          ? Colors.primary
                          : Colors.light.focusedBorder,
                      borderRadius: radius._15,
                    }}
                  ></View>
                </View>
              );
            })}
          </View>
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
      </>
    );
  };

  const ListFooterComponent = () => {
    return (
      <>
        {/* Special Offers */}
        <View style={{ marginTop: 20, gap: 20 }}>
          <SpecialOffers />
        </View>
      </>
    );
  };
  return (
    <ScreenWrapper
      style={{ padding: 24, backgroundColor: Colors.primaryWhite }}
    >
      {/* Search */}
      <View style={{ marginTop: 20, gap: 20 }}>
        <FlatList
          data={foodItems}
          // horizontal
          contentContainerStyle={{
            // flex: 1,
            gap: 15,
            paddingBottom: 100,

            // flexDirection: "row",
            // justifyContent: "space-around",
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item: any) => renderItem(item)}
        />
      </View>
    </ScreenWrapper>
  );
};

export default home;

const styles = StyleSheet.create({
  itemCart: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.primaryWhite,
    borderRadius: radius.full,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
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
