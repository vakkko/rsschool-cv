import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";

const App: React.FC = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default App;
