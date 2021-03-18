import { theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      dark: "#061C5B",
      light: "#153DA2",
      gray: "#A3AFBF",
    },
  },
  fonts: {
    poppins: '"Poppins", sans-serif;',
  },
};

export default customTheme;
