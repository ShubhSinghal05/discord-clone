import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="container" style={{ 
        backgroundImage: `url("images/bg.svg")`
      }}>
      <div className="navbar">
        <a href="http://localhost:3000/"><img src="images/main-logo.svg" alt="" /></a>
        <div className="navbar-text">
          <a href="http://localhost:3000/download">Download</a>
          <a href="#">Nitro</a>
          <a href="#">Saftey</a>
          <a href="#">Support</a>
          <a href="http://localhost:3000/blog">Blog</a>
          <a href="#">Careers</a>
        </div>
        <div className="open-discord">
          <a href="http://localhost:3000/main">Open Discord</a>
        </div>
      </div>
      <div className="bgs-cls">
        <img src="images/bg-right.svg" class="bg-right" alt="photo" />
        <img src="images/bg-left.svg" class="bg-left" alt="photo" />
      </div>
      <div className="main-text-div">
        <div class="heading">
          <h1>IMAGINE A PLACE...</h1>
        </div>
        <div className="title">
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community.
            <br /> Where just you and a handful of friends can spend time
            together. A place that makes it easy
            <br /> to talk every day and hang out more often.
          </p>
        </div>
        <div class="buttons">
          <a href="#" class="windows">
            Download for Windows
          </a>
          <a href="#" class="browser">
            Open Discord in your browser
          </a>
        </div>
      </div>
    </div>
  );
};
