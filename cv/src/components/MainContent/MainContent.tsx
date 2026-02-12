import React from "react";

import Summary from "./Summary/Summary";
import Experience from "./Experience/Experience";

import Box from "@mui/material/Box";

import { mainContentStyles } from "./mainContent.styles";

const MainContent: React.FC = () => {
  return (
    <Box component={"main"} sx={mainContentStyles}>
      <Summary />
      <Experience />
    </Box>
  );
};

export default MainContent;
