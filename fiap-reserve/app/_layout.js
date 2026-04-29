import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { ReservasProvider } from "../context/ReservasContext";
import { SalasProvider } from "../context/SalasContext";

export default function Layout() {
  return (
    <AuthProvider>
      <ReservasProvider>
        <SalasProvider>
          {/* Trocamos o RootNavigator pelo Stack direto para destravar a navegação */}
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(auth)" />
          </Stack>
        </SalasProvider>
      </ReservasProvider>
    </AuthProvider>
  );
}