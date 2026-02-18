import React from "react";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { solutionStyles } from "./CodeExamples.styles";

const CodeExample: React.FC = () => {
  return (
    <Box id="code-example" component={"section"}>
      <SectionHeader title="CODE EXAMPLE" />
      <Typography sx={solutionStyles} component="pre">
        <Typography component="code">
          {`function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`}
        </Typography>
      </Typography>
    </Box>
  );
};

export default CodeExample;
