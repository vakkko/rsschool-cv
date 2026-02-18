import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { hrStyles } from "./SectionHeader.styles";
import type { SectionHeaderProps } from "./SectionHeader.types";

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <Box component={"hr"} sx={hrStyles} />
    </>
  );
};

export default SectionHeader;
