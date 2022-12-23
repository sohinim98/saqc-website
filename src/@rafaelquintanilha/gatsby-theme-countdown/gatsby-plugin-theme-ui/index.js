import merge from "lodash.merge";
import theme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";

// Defining the primary color outside so we can reference it later in the svg
const PRIMARY_COLOR = "#080b5b";

export default merge({}, theme, {
  colors: {
    text: "#fff",
    background: "#080b5b",
    primary: PRIMARY_COLOR,
    border: "#ccc",
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [8, 10, 12, 14, 16, 18, 36, 64, 80],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 2,
      lineHeight: "text",
      padding: 0,
      overflowY: "auto",
    },
    Header: {
      fontSize: 5,
      height: ["50vh", "30vh"],
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "flex-end",
      pt: 3,
      pb: [3],
      zIndex: 99999
    },
    Main: {
      flex: 1,
      display: "flex",
    },
    Container: {
      my: 'auto',
      width: 'auto'
    },
    Footer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      pt: [3],
      pb: 2,
      height: "30vh"
    },
    h1: {
      fontSize: [4, 5, 6],
      lineHeight: "heading",
      margin: 0,
      maxWidth: ["60vw", "500px", "800px"]
    },
    h2: {
      fontWeight: "normal",
      fontSize: 2,
      margin: 0,
      maxWidth: ["90vw", "80vw", "800px"],
    },
  },
  svg: {
    fill: PRIMARY_COLOR
  }
})
