import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";
import RootLayout from "./_index";
import { FavoritesProvider } from "../context/FavoritesContext";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <RootLayout />
          <Toast />
        </FavoritesProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
