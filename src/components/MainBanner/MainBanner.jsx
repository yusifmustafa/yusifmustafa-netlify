import React from "react";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <section className="bgimage" id="home">
      <div className="container-fluid">
        <div className="row">
          <div className=  "col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
            <h2 className="hero_title">Hi, it's me Yusif Mustafazada</h2>
            <div className="hero_desc">
              <h2 className="badge badge-warning">
                I am a Junior Frontend Developer
              </h2>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
