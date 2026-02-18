import React from "react";

import Summary from "./Summary/Summary";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Languages from "./Languages/Languages";

import Box from "@mui/material/Box";

import { mainContentStyles } from "./mainContent.styles";
import CodeExample from "./CodeExample/CodeExample";
import Skills from "./Skills/Skills";

const MainContent: React.FC = () => {
  return (
    <Box component={"main"} sx={mainContentStyles}>
      <Summary />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Languages />
      <CodeExample />
    </Box>
  );
};

export default MainContent;
