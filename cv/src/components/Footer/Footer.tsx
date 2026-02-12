import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionHeader from "../MainContent/Summary/SectionHeader/SectionHeader";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

import { footerContentStyles, linkStyle, yearStyles } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <Box component={"footer"} sx={footerContentStyles}>
      <SectionHeader title="DETAILS " />
      <Box component={"nav"}>
        <Box component={"ul"}>
          <Box component="li">
            <Typography
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vakkko"
              component="a"
              sx={linkStyle}
            >
              <GitHubIcon />
              github.com/vakkko
            </Typography>
            <Typography component={"span"} sx={yearStyles}>
              From: 2024
            </Typography>
          </Box>
          <Box component={"li"}>
            <img src="/images/rs-school-logo.svg" alt="logo" />
          </Box>
          <Box component={"li"}>
            <Typography
              target="_blank"
              rel="noopener noreferrer"
              href="https://rs.school/courses/short-track"
              component="a"
              sx={linkStyle}
            >
              Course Link
              <LinkIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
