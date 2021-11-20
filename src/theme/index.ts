import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Archivo, ${base.fonts?.heading}`,
    body: `Archivo, ${base.fonts?.body}`,
  },
  colors: {
    gray: {
      800: "#000",
    },
    brand: {
      500: "#94d82d",
      800: "#2c410d",
    },
  },
});

export default theme;
