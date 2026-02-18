import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { OrganizationAndDateProps } from "./OrganizationAndDate.types";

import { companyAndDateStyles } from "./OrganizationAndDate.styles";

const OrganizationAndDate: React.FC<OrganizationAndDateProps> = ({
  companyName,
  date,
  position,
}) => {
  return (
    <Box sx={companyAndDateStyles}>
      <Typography variant="h3">
        {companyName}
        {position}
      </Typography>
      <Box component={"span"}>{date}</Box>
    </Box>
  );
};

export default OrganizationAndDate;
