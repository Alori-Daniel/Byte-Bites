import Input from "@/components/input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { countries } from "@/constants/countries";
import { Colors } from "@/constants/theme";
import useCountryStore, { Country } from "@/store/countryStore";
import { scale, verticalScale } from "@/utils/styling";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const selectcountry = () => {
  const router = useRouter();
  const { country, setCountry } = useCountryStore();
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme as "light" | "dark"];

  const handleSelect = (item: Country) => {
    setCountry(item);
    router.back();
  };
  const handleSearch = (text: string) => {
    // Handle search functionality here
    console.log("Searching for:", text);
    const filtered = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(text.toLowerCase()) ||
        country.code.toLowerCase().includes(text.toLowerCase())
    );
    console.log("Filtered countries:", filtered.length);
    setFilteredCountries(filtered);
  };

  return (
    <ScreenWrapper
      style={{ backgroundColor: theme.background, paddingHorizontal: 20 }}
    >
      <View>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>
      <Typo style={styles.title} color={Colors.primary}>
        Select Country
      </Typo>
      <Input
        placeholder="Search country..."
        containerStyle={{ height: verticalScale(30) }}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredCountries}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => {
          const isSelected = country?.callingCode === item.callingCode;
          const flag = item.flag;
          return (
            <TouchableOpacity
              key={item.code}
              style={[
                styles.row,
                isSelected && { backgroundColor: theme.secondaryBackground },
              ]}
              onPress={() => handleSelect(item)}
            >
              <Typo
                style={[
                  styles.name,
                  isSelected
                    ? { color: theme.text }
                    : { color: theme.secondaryText },
                ]}
              >
                {flag ? `${flag} ` : ""}
                {item.name}
              </Typo>
              <Typo
                style={[
                  styles.dialCode,
                  isSelected
                    ? { color: theme.text }
                    : { color: theme.secondaryText },
                ]}
              >
                {item.callingCode}
              </Typo>
            </TouchableOpacity>
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default selectcountry;

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginBottom: 12,
    fontSize: 18,
  },
  list: {
    gap: 10,
  },
  row: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: scale(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
  },
  dialCode: {
    fontSize: 14,
  },
});
