import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import cv from "../../Cv docs/YusifMustafazade.pdf";
import React from "react";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaReact, FaGithub, FaCss3, FaBootstrap } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { makeStyles } from "@mui/styles";
import { HiDesktopComputer } from "react-icons/hi";
import { SiChakraui, SiMaterialui, SiRedux } from "react-icons/si";
import { BiArrowBack } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";

import "./Skills.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <div className="skills">
      <React.Fragment className={classes.root}>
        <Link
          to="/"
          style={{
            cursor: "pointer",
            boxShadow: "none",
            margin: "5px",
            display: "flex",
            justifyContent: "end",
          }}
          className="btn"
          id="btn"
        >
          <div>
            <BiArrowBack />
            Home Page
          </div>
        </Link>
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

        <Divider />

        <List
          className="list"
          component="nav"
          aria-label="main mailbox folders"
        >
          <ListItem button>
            <ListItemIcon>
              <HtmlIcon />
            </ListItemIcon>
            <ListItemText primary="HTML" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CssIcon />
            </ListItemIcon>
            <ListItemText primary="CSS" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FaCss3 />
            </ListItemIcon>
            <ListItemText primary="SCSS" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <JavascriptIcon />
            </ListItemIcon>
            <ListItemText primary="Javascript" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FaReact />
            </ListItemIcon>
            <ListItemText primary="React Js" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FaGithub />
            </ListItemIcon>
            <ListItemText primary="Git" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TbApi />
            </ListItemIcon>
            <ListItemText primary="Rest API" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HiDesktopComputer />
            </ListItemIcon>
            <ListItemText primary="Responsive Design" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SiRedux />
            </ListItemIcon>
            <ListItemText primary="Redux Toolkit" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FaBootstrap />
            </ListItemIcon>
            <ListItemText primary="Bootstrap" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SiChakraui />
            </ListItemIcon>
            <ListItemText primary="Chakra UI" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SiMaterialui />
            </ListItemIcon>
            <ListItemText primary="Material UI" />
          </ListItem>
        </List>
      </React.Fragment>
    </div>
  );
};

export default Skills;
