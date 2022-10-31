import React from "react";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./ProjectsData";
import ProjectCardComponent from "./ProjectCard";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="homeButton">
        <Button
          onClick={navigateToHomePage}
          className="m-2"
          variant="contained"
        >
          <HomeIcon />{" "}
        </Button>
      </div>

      <StyledProjects className="mt-5" id="projects">
        <SectionHeading>
          <SectionTitle>Projects</SectionTitle>
        </SectionHeading>

        <ProjectsContainer>
          {projectData.map((project) => {
            return <ProjectCardComponent key={project.id} {...project} />;
          })}
        </ProjectsContainer>
      </StyledProjects>
    </>
  );
};

export default Projects;
