import React from "react";
import img from "../../images/PicsArt_09-21-12.08.00.jpg";
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

const Contact = () => {
  return (
    <div className="contact">
      <div className="cards col-2">
        <div className="card">
          <img className="card-img-top" src={img} alt="YusifMustafazada" />
          <div className="card-body">
            <p className="card-text">
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
            </p>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="form-input col-9">
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
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField fullWidth multiline label="Message" />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contact;
