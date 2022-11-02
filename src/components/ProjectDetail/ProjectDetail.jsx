import React from "react";
import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import { projectData } from "../Portfolio/ProjectsData";
import { Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const ProjectDetail = () => {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  };
  let { id } = useParams();
  return (
    <div className="cardContain">
      <div className="home_button">
        <Button variant="contained" onClick={backToHomePage}>
          <Home />
        </Button>
      </div>
      {projectData
        ?.filter((item) => item.id === parseInt(id))
        .map((items, key) => (
          <div key={items.id} className="page-contain">
            <a href={items.codeLink} className="data-card">
              <h3>{items.detailHeaderTitle}</h3>
              <h5 className="itemdetailtitle">{items.detailBodyTitle}</h5>
              <div className="images">
                <img src={items.image} alt={items.title} />
                <img src={items.detailImageTwo} alt={items.title} />
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default ProjectDetail;
