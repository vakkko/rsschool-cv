import React from "react";

import Summary from "./Summary/Summary";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Languages from "./Languages/Languages";

import Box from "@mui/material/Box";

import { mainContentStyles } from "./mainContent.styles";

const MainContent: React.FC = () => {
  return (
    <Box component={"main"} sx={mainContentStyles}>
      <Summary />
      <Experience />
      <Education />
      <Projects />
      <Languages />
    </Box>
  );
};

export default MainContent;
