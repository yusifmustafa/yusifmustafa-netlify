import React from "react"; 
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };
  return (
    <div
      className="experience"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="about" className="col-10">
        <VerticalTimeline className="about-items" lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2007 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">My High School</h3>
            <p>School No. 246</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          id="elements"
            className="vertical-timeline-element--education"
            date="2018 - 2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 id="university" className="vertical-timeline-element-title">
              My University
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree
            </h4>

            <p>Baku Engineering University</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              AVRORA MMC Group
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Baku,Azerbaijan
            </h4>
            <p>Intern Frontend Developer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div style={{ marginBottom: "35rem", marginRight: "1rem" }}>
        <Button
          onClick={navigateToHomePage}
          variant="contained"
          className="homeButton"
        >
          <Home />
        </Button>
      </div>
    </div>
  );
};
export default About;
