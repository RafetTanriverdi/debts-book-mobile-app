import Providers from "@/providers";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <Providers>
      <Stack>
        <Stack.Screen
          name="(business)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(customer)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: true,
            title: "Login",
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </Providers>
  );
}
