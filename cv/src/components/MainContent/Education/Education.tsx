import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import OrganizationAndDate from "../Experience/CompanyTitle/OrganizationAndDate";

const Education: React.FC = () => {
  return (
    <Box id="education" component={"section"}>
      <SectionHeader title="EDUCATION" />
      <Box>
        <OrganizationAndDate companyName="Bitcamp" date="06/2024 - 01/2025" />
        <Typography>
          Bitcamp is a Georgian-based organization focused on teaching
          programming.
        </Typography>
      </Box>
      <Box>
        <OrganizationAndDate
          companyName="SKILLWILL - React/React Native"
          date="10/2025 - Present"
        />
        <Typography>SKILLWILL is also georgian based organization.</Typography>
      </Box>
      <OrganizationAndDate
        companyName="Tbilisi State University, Bachelor/Economics and Bussiness 
"
        date="09/2018 - 07/2022"
      />
    </Box>
  );
};

export default Education;
