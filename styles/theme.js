import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Mulish, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    heading: "Moon, sans-serif",
    monospace: "Roboto Mono",
  },
  colors: {
    black: "#1A1110",
    white: "#fffafa"
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 300
      }
    }
  },
});

export default theme;