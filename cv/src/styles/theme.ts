import { createTheme } from "@mui/material/styles";

import { flexColumnCenter } from "./common";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});

export const globalStyles = {
  "#root": {
    ...flexColumnCenter,
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
  },
};

export default theme;
