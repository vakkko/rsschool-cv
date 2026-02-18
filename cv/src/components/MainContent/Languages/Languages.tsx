import React from "react";

import Box from "@mui/material/Box";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import Typography from "@mui/material/Typography";

import { languageContainer, languageStyles } from "./Language.styles";

const Languages: React.FC = () => {
  return (
    <Box id="languages" component={"section"}>
      <SectionHeader title="LANGUAGES" />
      <Box sx={languageContainer}>
        <Typography component={"span"} sx={languageStyles}>
          English - B2
        </Typography>
        <Typography component={"span"}>Georgian - Native</Typography>
      </Box>
    </Box>
  );
};

export default Languages;
