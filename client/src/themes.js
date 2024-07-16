import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#d5d7d6",
    200: "#abaead",
    300: "#808683",
    400: "#565d5a",
    500: "#2c3531",
    600: "#232a27",
    700: "#1a201d",
    800: "#121514",
    900: "#090b0a",
  },
  secondary: {
    100: "#cfe0e0",
    200: "#a0c1c2",
    300: "#70a2a3",
    400: "#418385",
    500: "#116466",
    600: "#0e5052",
    700: "#0a3c3d",
    800: "#072829",
    900: "#031414",
  },
  neutral: {
    100: "#f7efe8",
    200: "#f0dfd1",
    300: "#e8d0ba",
    400: "#e1c0a3",
    500: "#d9b08c",
    600: "#ae8d70",
    700: "#826a54",
    800: "#574638",
    900: "#2b231c",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Ubanist", "sans-sarif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel Decorative", "sans-sarif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel Decorative", "sans-sarif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel Decorative", "sans-sarif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel Decorative", "sans-sarif"].join(","),
      fontSize: 14,
    },
  },
});
