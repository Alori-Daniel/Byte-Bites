import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { Colors } from "@/constants/theme";
import { scale } from "@/utils/styling";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

const onboardingData = [
  {
    index: 1,
    title: "Wide Selection",
    description: "Discover delicious recipes from around the world",
    image: require("@/assets/images/onboarding/slideOne.png"),
  },
  {
    index: 2,
    title: "Fast Delivery",
    description: "Receive goods after 10 minutes.",
    image: require("@/assets/images/onboarding/slideTwo.png"),
  },
  {
    index: 3,
    title: "Order Tracking",
    description: "Track your orders in real-time.",
    image: require("@/assets/images/onboarding/slideThree.png"),
  },
  {
    index: 4,
    title: "Special offers",
    description: "Weekly deals and discounts.",
    image: require("@/assets/images/onboarding/slideFour.png"),
  },
];

const Onboarding = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const screenWidth = Dimensions.get("window").width;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (scrollRef.current && nextIndex < onboardingData.length) {
      scrollRef.current.scrollTo({
        x: nextIndex * Dimensions.get("window").width,
        animated: true,
      });
    } else {
      router.push("/(auth)/login");
    }
  };

  return (
    <ScreenWrapper style={{ backgroundColor: theme.background }}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {onboardingData.map((item) => (
          <View
            key={item.index}
            style={[
              styles.container,
              {
                width: Dimensions.get("window").width,
              },
            ]}
          >
            <Image source={item.image} style={[styles.image]} />
            <Typo
              style={{ marginTop: scale(122), color: Colors.primary }}
              fontWeight={600}
              size={22}
            >
              {item.title}
            </Typo>
            <Typo
              style={{
                marginTop: scale(8),
                color: Colors.primary,
              }}
              fontWeight={"400"}
              size={18}
            >
              {item.description}
            </Typo>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          marginVertical: 5,
          justifyContent: "center",
        }}
      >
        {onboardingData.map((_, i) => (
          <Animated.View
            key={i}
            style={{
              width: i === currentIndex ? scale(30) : scale(8),
              height: scale(8),
              borderRadius: 4,
              backgroundColor:
                i === currentIndex ? Colors.primary : theme.border,
              marginHorizontal: scale(4),
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </View>

      <View
        style={{
          paddingVertical: 20,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <Button
          style={{ backgroundColor: theme.buttonBackground, width: scale(345) }}
          onPress={handleNext}
          disabled={currentIndex === onboardingData.length - 1}
        >
          <Typo style={{ color: theme.buttonText }} fontWeight={600} size={18}>
            {currentIndex === onboardingData.length - 1 ? "Login" : "Next"}
          </Typo>
        </Button>

        <Button
          style={{ backgroundColor: "transparent", width: scale(345) }}
          onPress={() => {
            if (currentIndex === onboardingData.length - 1) {
              router.push("/(auth)/register");
            } else {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  x: 3 * Dimensions.get("window").width,
                  animated: true,
                });
              }
              setCurrentIndex(3);
            }
          }}
        >
          <Typo
            style={{ color: Colors.primary, opacity: 0.8 }}
            fontWeight={600}
            size={18}
          >
            {currentIndex === onboardingData.length - 1 ? "Register" : "Skip"}
          </Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: scale(517),
  },
  image: {
    width: scale(345),
    height: scale(230),
    resizeMode: "contain",
  },
});
