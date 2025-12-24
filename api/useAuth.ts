import { storage } from "@/utils/storage";
import { useRouter } from "expo-router";
import useAuthStore from "../store/authStore";

export const useAuth = () => {
  const router = useRouter();
  const store = useAuthStore();

  const gotoHomePage = () => {
    setTimeout(() => {
      router.replace("/(onboarding)");
    }, 1000);
  };

  const login = (user: any) => {
    store.setUser(user);
  };

  const logout = () => {
    store.logout();
  };

  const loadToken = async () => {
    try {
      const token = await storage.getItem("auth_token");
      console.log("Loaded token:", token);

      if (token) {
        console.log("Token found, navigating to main app");
      } else {
        console.log("No token found, navigating to onboarding");
        gotoHomePage();
      }
    } catch (error) {
      console.error("Failed to load token:", error);
      gotoHomePage();
      return null;
    }
  };

  return { login, logout, loadToken };
};
