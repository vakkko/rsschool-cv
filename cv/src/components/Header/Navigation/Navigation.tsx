import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { navigaitonStyles } from "./Navigation.styles";

const Navigation: React.FC = () => {
  return (
    <Box sx={navigaitonStyles} component="nav">
      <Box component="ul">
        <Box component="li">
          <Typography component="a" href="#summary">
            Summary
          </Typography>
        </Box>
        <Box component="li">
          <Typography component="a" href="#proffesional-experience">
            Experience
          </Typography>
        </Box>
        <Box component="li">
          <Typography component="a" href="#education">
            Education
          </Typography>
        </Box>
        <Box component="li">
          <Typography component="a" href="#projects">
            Projects
          </Typography>
        </Box>
        <Box component="li">
          <Typography component="a" href="#skills">
            Skills
          </Typography>
        </Box>
        <Box component="li">
          <Typography component="a" href="#languages">
            Languages
          </Typography>
        </Box>
        <Box component="li">
          <Typography component="a" href="#code-example">
            Code
          </Typography>
        </Box>
        <Box component="li">
          <Typography component="a" href="#details">
            Details
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
