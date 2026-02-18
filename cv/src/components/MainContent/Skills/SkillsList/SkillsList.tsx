import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { SkillsListProps } from "./SkillsList.types";

import { ListsStyles } from "./SkillsList.styles";

const SkillsList: React.FC<SkillsListProps> = ({ skillTitle, skills }) => {
  return (
    <Box>
      <Typography variant="h3">{skillTitle}</Typography>
      <Box component={"ul"} sx={ListsStyles}>
        {skills.map((skill, i) => (
          <Box component={"li"} key={i}>
            {skill}
            {i !== skills.length - 1 ? "," : ""}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsList;
