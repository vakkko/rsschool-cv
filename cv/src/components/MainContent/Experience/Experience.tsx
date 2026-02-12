import React from "react";

import Box from "@mui/material/Box";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import OrganizationAndDate from "./CompanyTitle/OrganizationAndDate";
import Typography from "@mui/material/Typography";

import { techStackStyles } from "./Experience.styles";

const Experience: React.FC = () => {
  return (
    <Box component={"section"}>
      <SectionHeader title="PROFFESIONAL EXPERIENCE" />
      <OrganizationAndDate
        companyName="Andersen"
        position=", React Trainee"
        date="08/2025 - 11/2025"
      />
      <Typography component={"p"}>
        During my two-month traineeship at Andersen, I worked on a
        healthcare-related project simulation following a commercial-like
        development workflow. I collaborated using Git, participated in Code
        Reviews, and followed Scrum practices. With guidance from a Tech Lead
        and through pair programming sessions, I improved my frontend skills and
        learned to structure features more effectively.
      </Typography>
      <Typography sx={techStackStyles} component={"p"}>
        Tech stack: React, TypeScript, React Router, Redux Toolkit, RTK Query,
        MUI, React Hook Form + Yup, Vitest, React Testing Library.
      </Typography>
    </Box>
  );
};

export default Experience;
