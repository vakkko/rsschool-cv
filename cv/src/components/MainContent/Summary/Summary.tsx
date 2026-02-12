import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionHeader from "./SectionHeader/SectionHeader";

const Summary: React.FC = () => {
  return (
    <Box component={"section"}>
      <SectionHeader title="SUMMARRY" />
      <Typography component="p">
        React Developer specializing in creating clean, user-focused interfaces
        using React, TypeScript, and modern JavaScript. Enjoy solving frontend
        problems and improving code quality. Eager to gain experience by working
        on real projects and to broaden my expertise into backend development,
        particularly with Node.js.
      </Typography>
    </Box>
  );
};

export default Summary;
