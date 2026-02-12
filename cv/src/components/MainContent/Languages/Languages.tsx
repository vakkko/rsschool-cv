import React from "react";

import Box from "@mui/material/Box";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import Typography from "@mui/material/Typography";

const Languages: React.FC = () => {
  return (
    <Box component={"section"}>
      <SectionHeader title="LANGUAGES" />
      <Typography component={"span"} sx={{ mr: "25rem" }}>
        English - B2
      </Typography>
      <Typography component={"span"}>Georgian - Native</Typography>
    </Box>
  );
};

export default Languages;
