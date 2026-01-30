import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { Colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";

const verification = () => {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];
  const [code, setCode] = useState(["", "", "", ""]);
  const [isResend, setIsResend] = useState<boolean>();
  const { phoneNumber } = useLocalSearchParams();
  const [number, setNumber] = useState<any>();

  console.log(phoneNumber);
  const timerRef = useRef<any | null>(null);
  const inputRef = useRef<(TextInput | null)[]>([]);

  const handleNext = (text: string, index: number) => {
    console.log("inputRef", text, index);
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleBack = (e: any, index: number) => {
    console.log("native", e.nativeEvent);
    if (e.nativeEvent.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }

    // if (e.nativeEvent ="Backspace")
  };

  const startTimer = () => {
    setIsResend(false);
    setNumber(30);

    timerRef.current = setInterval(() => {
      setNumber((prev: any) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setIsResend(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <ScreenWrapper
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: verticalScale(20),
        backgroundColor: theme.background,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            marginTop: verticalScale(54),
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                elevation: 10,
                backgroundColor: theme.background,
                borderRadius: radius.full,
              }}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color={theme.text} />
            </TouchableOpacity>
          </View>
        </View>
        <Typo
          style={{ textAlign: "center", marginBottom: 10 }}
          size={30}
          color={Colors.primary}
          fontWeight={600}
        >
          Verification
        </Typo>
        <Typo
          color={theme.darkText}
          style={{ textAlign: "center", marginBottom: 20 }}
        >
          Code has been sent to {phoneNumber}
        </Typo>
        <View
          style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
        >
          {code.map((item, index) => (
            <View
              style={{
                width: 75,
                height: 75,
                borderWidth: 1,
                borderColor: Colors.light.focusedBorder,
                backgroundColor: "rgba(31,42,55,0.1)",
                // opacity: 0.1,
                borderRadius: 8,
              }}
              key={index}
            >
              <TextInput
                ref={(ref) => {
                  inputRef.current[index] = ref;
                }}
                style={{
                  textAlign: "center",
                  color: Colors.text,
                  fontSize: 40,
                  fontWeight: 600,
                  width: 75,
                  height: 75,
                }}
                keyboardType="number-pad"
                maxLength={1}
                onKeyPress={(e) => handleBack(e, index)}
                onChangeText={(text) => handleNext(text, index)}
              />
            </View>
          ))}
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 10,
            marginTop: verticalScale(30),
            alignItems: "center",
          }}
        >
          <Typo style={{ color: Colors.text }}>Didn't receive code?</Typo>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Ionicons name="time-outline" size={20} />
            <Typo style={{ color: Colors.text }}>00 : {number}</Typo>
          </View>

          <TouchableOpacity onPress={() => startTimer()} disabled={!isResend}>
            <Typo
              style={{ color: isResend ? Colors.text : Colors.primaryText }}
            >
              Resend Code
            </Typo>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ gap: 10 }}>
        <KeyboardStickyView
          offset={{ closed: 0, opened: 50 }}
          // style={{
          //   backgroundColor: theme.background,
          //   paddingBottom: verticalScale(20),
          // }}
        >
          <Button
            style={{
              backgroundColor: theme.buttonBackground,
              width: "100%",
            }}
            onPress={() => router.replace("/(tabs)/home")}
            disabled={false}
          >
            <Typo
              style={{ color: theme.buttonText }}
              fontWeight={600}
              size={18}
            >
              Verify
            </Typo>
          </Button>
        </KeyboardStickyView>

        <TouchableOpacity onPress={() => router.back()}>
          <Typo
            fontWeight={"400"}
            style={{ color: Colors.text, textAlign: "center" }}
          >
            Back to<Typo> Sign In </Typo>
          </Typo>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default verification;

const styles = StyleSheet.create({});
