import React, { useRef } from "react";
import img from "../../images/PicsArt_09-21-12.08.00.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import emailjs from "@emailjs/browser";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const notify = () => {
    toast.success("Mesaj uğurla göndərildi!");
  };
  const notify2 = () => {
    toast.error("Mesaj göndərilmədi");
  };
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4wofwme",
        "template_nc0ooed",
        form.current,
        "95fC6IZOaxrI9XJtP"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
          notify2();
        }
      );
  };

  return (
    <div className="contact col-12">
      <div className="cards">
        <div className="card">
          <img
            className="card-img-top col-4"
            src={img}
            alt="YusifMustafazada"
          />
          <div className="card-body">
            <div className="card-text">
              <div className="phone">
                <h6>
                  <FaPhoneAlt /> 051-432-05-18
                </h6>
              </div>
              <div className="mail">
                <h6>
                  <FaEnvelope /> yusifmustafadev@gmail.com
                </h6>
              </div>
              <div className="github">
                <h6>
                  <FaGithub />{" "}
                  <a href="https://github.com/yusifmustafa">
                    Yusif Mustafa/Github
                  </a>
                </h6>
              </div>
              <div className="facebook">
                <h6>
                  <FaFacebookSquare />{" "}
                  <a href="https://www.facebook.com/profile.php?id=100076154341506">
                    Yusif Mustafa/Facebook
                  </a>
                </h6>
              </div>
              <div className="linkedin">
                <h6>
                  <FaLinkedin />{" "}
                  <a href="https://www.linkedin.com/in/yusif-mustafa-59a51a24a/">
                    Yusif Mustafa/Linkedin
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form col-4">
        <div className="form-input">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <FaEnvelope />
              </Avatar>
              <Typography component="h1" variant="h5">
                Contact me
              </Typography>
              <Box sx={{ mt: 2 }}>
                <form onSubmit={sendEmail} ref={form}>
                  <TextField
                    name="username"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoComplete="username"
                    type="text"
                    autoFocus
                  />
                  <TextField
                    name="email"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoComplete="email"
                    type="email"
                    autoFocus
                  />
                  <TextField
                    name="message"
                    margin="normal"
                    fullWidth
                    multiline
                    label="Message"
                  />
                  <div className="sendMessageBtn">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
      <div id="homeButton" className="homeButton m-2">
        <Button onClick={navigateToHomePage} variant="contained">
          <Home />
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
