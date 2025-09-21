import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";
import RootLayout from ".";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <RootLayout />
        <Toast />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
