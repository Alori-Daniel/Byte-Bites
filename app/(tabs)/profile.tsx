import person from "@/assets/images/person.jpg";
import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { profileData } from "@/constants/data";
import { Colors, radius } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const profile = () => {
  return (
    <ScreenWrapper
      style={{ padding: 24, backgroundColor: Colors.primaryWhite }}
    >
      <ScrollView>
        <View style={{ marginTop: 30, marginBottom: 20, position: "relative" }}>
          <Typo
            size={24}
            style={{ textAlign: "center" }}
            fontWeight={"600"}
            color={Colors.text}
          >
            Profile
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

        <View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 15,
                alignItems: "center",
              }}
            >
              <View
                style={[
                  {
                    borderColor: Colors.light.focusedBorder,
                    // padding: 20,
                  },
                ]}
              >
                {/* <Ionicons name={"person"} size={24} /> */}
                <Image
                  source={person}
                  resizeMode={"contain"}
                  style={{ width: 80, height: 80, borderRadius: radius.full }}
                />
              </View>

              <View style={{}}>
                <Typo
                  color={Colors.text}
                  fontWeight={"600"}
                  size={20}
                  style={{}}
                >
                  Alori Codes
                </Typo>
                <Typo
                  color={Colors.text}
                  size={14}
                  fontWeight={"300"}
                  style={{}}
                >
                  https://github.com/Alori-Daniel
                </Typo>
              </View>
            </View>
            <View
              style={[
                {
                  backgroundColor: Colors.primary,
                  padding: 8,
                  borderRadius: radius.full,
                },
              ]}
            >
              <Ionicons name={"pencil"} color={Colors.primaryWhite} size={24} />
            </View>
          </View>

          <Button
            style={{
              flexDirection: "row",
              marginTop: 20,
              gap: 10,
              alignItems: "center",
              backgroundColor: Colors.lightPrimary,
            }}
          >
            <Ionicons name="log-out-outline" size={28} color={Colors.primary} />
            <Typo fontWeight={"600"}>Logout</Typo>
          </Button>
        </View>

        <View style={{ gap: 30, marginTop: 30 }}>
          {profileData.map((item) => {
            return (
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={item.icon as any}
                    size={24}
                    color={Colors.text}
                  />
                  <Typo fontWeight={"400"} size={18} color={Colors.text}>
                    {item.name}
                  </Typo>
                </View>

                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color={Colors.text}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default profile;

const styles = StyleSheet.create({});
