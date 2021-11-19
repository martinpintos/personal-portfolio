import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Archivo, ${base.fonts?.heading}`,
    body: `Archivo, ${base.fonts?.body}`,
  },
  colors: {
    gray: {
      800: "#131316",
    },
    green: {
      300: "#94d82d",
    },
  },
});

export default theme;
