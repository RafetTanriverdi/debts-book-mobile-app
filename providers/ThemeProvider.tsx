import {
    PaperDarktheme,
    PaperLightTheme,
} from "@/constants/UIColors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import { PaperProvider } from "react-native-paper";

export default function ThemeProviders({
  children,
}: React.PropsWithChildren) {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark"
      ? PaperDarktheme
      : PaperLightTheme;
  return (
    <ThemeProvider
      value={
        colorScheme === "dark"
          ? DarkTheme
          : DefaultTheme
      }
    >
      <PaperProvider theme={paperTheme}>
        {children}
      </PaperProvider>
    </ThemeProvider>
  );
}
