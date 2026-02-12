import React from "react";

import TechStack from "../../Experience/TechStack/TechStack";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";

import { linkStyles, projectBoxStyles } from "./Project.styles";

import type { ProjectProps } from "./Project.types";

const Project: React.FC<ProjectProps> = ({
  projectName,
  desription,
  githubLink,
  liveDemo,
  techStack,
}) => {
  return (
    <Box sx={projectBoxStyles}>
      <Typography variant="h3">{projectName}</Typography>
      <Typography component={"p"}>{desription}</Typography>
      <TechStack technologies={techStack} />
      <Typography
        target="_blank"
        rel="noopener noreferrer"
        href={githubLink}
        component="a"
        sx={linkStyles}
      >
        Github: {githubLink} <LinkIcon />
      </Typography>
      <Typography
        target="_blank"
        rel="noopener noreferrer"
        href={liveDemo}
        component="a"
        sx={linkStyles}
      >
        Live Demo: {liveDemo} <LinkIcon />
      </Typography>
    </Box>
  );
};

export default Project;
