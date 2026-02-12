import React from "react";

import Typography from "@mui/material/Typography";

import type { TechStackProps } from "./TechStack.types";

import { techStackStyles } from "./TechStack.styles";

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <Typography sx={techStackStyles} component={"p"}>
      Tech stack: {technologies}
    </Typography>
  );
};

export default TechStack;
