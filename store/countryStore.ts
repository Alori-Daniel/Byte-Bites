import { create } from "zustand";

export type Country = {
  code: string;
  name: string;
  nationality: string;
  flag: string;
  callingCode: string;
};

type CountryState = {
  country: Country | null;
  setCountry: (country: Country) => void;
};

const useCountryStore = create<CountryState>((set) => ({
  country: null,
  setCountry: (country) => set({ country }),
}));

export default useCountryStore;
