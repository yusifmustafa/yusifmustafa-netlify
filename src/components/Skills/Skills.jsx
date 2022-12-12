import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import cv from "../../Cv docs/YusifMustafazada.pdf";
import React from "react";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import {
  FaReact,
  FaGithub,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { makeStyles } from "@mui/styles";
import { HiDesktopComputer } from "react-icons/hi";
import { SiChakraui, SiMaterialui, SiRedux, SiMysql } from "react-icons/si";
import { BsDownload } from "react-icons/bs";

import "./Skills.css";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    fontFamily: "Comfortaa,cursive",
  },
}));

const Skills = () => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };
  const classes = useStyles();

  return (
    <div className="skills">
      <React.Fragment className={classes.root}>
        <div className="homeButton">
          <Button
            className="m-2"
            variant="contained"
            onClick={navigateToHomePage}
          >
            <div>
              <Home />
            </div>
          </Button>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            style={{
              marginLeft: "1rem",
              fontFamily: "Montserrat",
              fontWeight: 800,
              letterSpacing: "2px",
              fontSize: "2.5rem",
              textAlign: "center",
            }}
          >
            Skills
          </Typography>
          <Typography className="cvtypo">
            <a
              className="btn btn-danger"
              href={cv}
              download="Yusif Mustafazadə.pdf"
            >
              <div>
                Download Cv <BsDownload />
              </div>
            </a>
          </Typography>
        </div>

        <Divider />

        <List
          className="list"
          component="nav"
          aria-label="main mailbox folders"
        >
          <ListItem>
            <ListItemIcon>
              <HtmlIcon style={{ fontSize: "2.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="HTML" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CssIcon style={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="CSS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaCss3 style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="SCSS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <JavascriptIcon style={{ fontSize: "2.2rem" }} />
            </ListItemIcon>
            <ListItemText primary="Javascript" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaReact style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="React Js" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaGithub style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Git" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TbApi style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Rest API" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HiDesktopComputer style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Responsive Design" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SiRedux style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Redux Toolkit" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaBootstrap style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Bootstrap" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SiChakraui style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Chakra UI" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SiMaterialui style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Material UI" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaNodeJs style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText primary="Node JS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SiMysql style={{ fontSize: "2rem" }} />
            </ListItemIcon>
            <ListItemText primary="MYSQL" />
          </ListItem>
        </List>
      </React.Fragment>
    </div>
  );
};

export default Skills;
