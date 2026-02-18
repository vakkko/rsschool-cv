import React from "react";

import Box from "@mui/material/Box";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import SkillsList from "./SkillsList/SkillsList";

import {
  programmingLanguages,
  webTechnologies,
  frontendFrameworksAndLibraries,
  backend,
  testing,
  tools,
} from "./Skill.const";

import { skillsContainer } from "./Skills.styles";

const Skills: React.FC = () => {
  return (
    <Box id="skills" component={"section"}>
      <SectionHeader title="Skills" />
      <Box sx={skillsContainer}>
        <SkillsList
          skillTitle="Programming Languages"
          skills={programmingLanguages}
        />
        <SkillsList skillTitle="Web Technologies" skills={webTechnologies} />
        <SkillsList
          skillTitle="Frontend Frameworks / Libraries"
          skills={frontendFrameworksAndLibraries}
        />
        <SkillsList skillTitle="Backend" skills={backend} />
        <SkillsList skillTitle="Testing" skills={testing} />
        <SkillsList skillTitle="Tools" skills={tools} />
      </Box>
    </Box>
  );
};

export default Skills;
