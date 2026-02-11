import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfo: React.FC = () => {
  return (
    <Box>
      <Box>
        <MailIcon aria-label="email" />
        <Typography component="span">vakogabo44@gmail.com</Typography>
      </Box>
      <Box>
        <CallIcon />
        <Typography component="span">+995 579 32 27 94</Typography>
      </Box>
      <Box>
        <GitHubIcon />
        <Typography href="https://github.com/vakkko" component="a">
          github.com/vakkko
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInfo;
