import React from "react";

import Box from "@mui/material/Box";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import Project from "./Project/Project";

const Projects: React.FC = () => {
  return (
    <Box id="projects" component={"section"}>
      <SectionHeader title="PROJECTS" />
      <Project
        projectName="RedSeam Clothing"
        desription="RedSeam Clothing is an e-commerce web application built as part of a Redberry challenge.
         The application consumes a backend API provided by Redberry and allows users to browse products, view detailed information, and proceed through a simulated checkout flow."
        githubLink="https://github.com/vakkko/RedSeam-Clothing"
        liveDemo="https://ecommerce-blond-beta-89.vercel.app/"
        techStack="React,React Router, TypeScript React Hook Form + Yup, Redux Toolkit (RTK Query), styled-components, Session Storage, Vitest + React Testing Library "
      />
      <Project
        projectName="Real Estate Manager"
        desription="A web application for creating and managing appointments for renting or selling properties. Users can add agents and filter appointments based on various criteria."
        techStack="React, TypeScript, React Router, styled-components, React Hook Form"
        githubLink="https://github.com/vakkko/real-estate-manager"
        liveDemo="https://vakkko.github.io/real-estate-manager/"
      />
    </Box>
  );
};

export default Projects;
