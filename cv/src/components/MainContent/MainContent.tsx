import React from "react";

import Summary from "./Summary/Summary";
import Box from "@mui/material/Box";

import { mainContentStyles } from "./mainContent.styles";

const MainContent: React.FC = () => {
  return (
    <Box component={"main"} sx={mainContentStyles}>
      <Summary />
    </Box>
  );
};

export default MainContent;
