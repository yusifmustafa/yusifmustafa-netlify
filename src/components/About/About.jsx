import React from "react";
import "./About.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="experience"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VerticalTimeline lineColor="#3e497a">
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
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My University,Azerbaijan,Baku
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
          <h3 className="vertical-timeline-element-title">AVRORA MMC Group</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Baku,Azerbaijan
          </h4>
          <p>Intern Frontend Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div style={{ marginBottom: "35rem", marginRight: "1rem" }}>
        <Link to="/" className="btn btn-primary">
          <IoArrowBackCircle /> Go Back
        </Link>
      </div>
    </div>
  );
};
export default About;
