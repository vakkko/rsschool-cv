import React from "react";

import ContactInfo from "./ContactInfo/ContactInfo";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { imgStyles } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <Box component="header">
      <Box
        component="img"
        sx={imgStyles}
        src="/images/profile.JPG"
        alt="profile"
      />
      <Typography variant="h1">Vladimer Gabisonia</Typography>
      <Typography component="span">React Developer</Typography>
      <ContactInfo />
    </Box>
  );
};

export default Header;
