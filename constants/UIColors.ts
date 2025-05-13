import {
    MD3DarkTheme,
    MD3LightTheme,
} from "react-native-paper";

export const PaperDarktheme = {
  ...MD3DarkTheme,

  colors: {
    ...MD3DarkTheme.colors,
    primary: "#00C853",
    secondary: "#69F0AE",
    background: "#000000",
    surface: "#1A1A1A",
    text: "#FFFFFF",
    onPrimary: "#000000",
    onSecondary: "#000000",
  },
};

export const PaperLightTheme = {
  ...MD3LightTheme,

  colors: {
    ...MD3LightTheme.colors,
    primary: "#00C853",
    secondary: "#69F0AE",
    background: "#FFFFFF",
    surface: "#F8F8F8",
    text: "#000000",
    onPrimary: "#FFFFFF",
    onSecondary: "#000000",
  },
};
