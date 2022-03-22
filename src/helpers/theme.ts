import { createTheme } from "@mui/material";
import { colors } from "./constants";

export default createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    allVariants: {
      fontFamily: 'Open Sans, sans-serif',
      textTransform: 'none',
      fontSize: 16,
    },
    body1: {
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: 13,
      lineHeight: "18px",
      color: colors.gray
    },
    body2: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "18px"
    },
    caption: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "24px",
      color: colors.lighterGray
    },
    h4: {
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: 20,
      lineHeight: "26px",
      letterSpacing: "0.25px",
      color: colors.black500
    },
    subtitle1: {
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "20px",
      color: colors.primaryColor
    },
    subtitle2: {
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "20px",
      color: colors.gray700
    }
  },
  palette: {
    primary: {
      main: colors.primaryColor,
      contrastText: colors.white100,
      dark: colors.primaryColor
    },
  }
})