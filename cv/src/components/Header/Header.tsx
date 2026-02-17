import React from "react";

import ContactInfo from "./ContactInfo/ContactInfo";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  headerStyles,
  imgStyles,
  nameAndPositionStyles,
} from "./Header.styles";
import Navigation from "./Navigation/Navigation";

const Header: React.FC = () => {
  return (
    <Box sx={headerStyles} component="header">
      <Navigation />
      <Box
        component="img"
        sx={imgStyles}
        src="./images/profile.JPG"
        alt="profile"
      />
      <Box sx={nameAndPositionStyles}>
        <Typography variant="h1">Vladimer Gabisonia</Typography>
        <Typography component="span">React Developer</Typography>
      </Box>
      <ContactInfo />
    </Box>
  );
};

export default Header;
