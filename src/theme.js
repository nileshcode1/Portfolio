// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A1A1A", // Default Material-UI blue
    },
    secondary: {
      main: "#9c27b0", // Purple
    },
    background: {
      default: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
