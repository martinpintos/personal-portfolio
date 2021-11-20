import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Archivo, ${base.fonts?.heading}`,
    body: `Archivo, ${base.fonts?.body}`,
  },
  colors: {
    white: "#ececec",
    black: "#000",
    gray: {
      800: "#000",
    },
    brand: {
      500: "#BDDA57",
      800: "#3C4810",
    },
  },
});

export default theme;
