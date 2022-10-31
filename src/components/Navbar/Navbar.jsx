import React from "react";
import "./Navbar.css";
import MainBanner from "../MainBanner/MainBanner";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
        <div className=" nav_bar col-12">
          <div>
            <a className="navbar-brand" href="#/">
              Yusif
            </a>
          </div>

          <div id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MainBanner />
    </div>
  );
};

export default Navbar;
