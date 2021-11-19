import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Inter, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  colors: {
    gray: {
      800: "#131316",
    },
  },
});

export default theme;
