import React from "react";
import "./BlogNavbar.css";
export const BlogNavbar = () => {
  return (
    <div className="container" style={{ 
        backgroundImage: `url("images/bg.svg")`
      }}>
      <div className="navbar">
        <img src="https://www.videogameschronicle.com/files/2021/05/discord-new-logo.jpg" alt="" />
        <div className="navbar-text">
         
          <a href="#">FEATURED</a>
        </div>
        <div className="open-discord">
          <a href="http://localhost:3000/main">DISCORD.COM</a>
        </div>
      </div>
     
     
    </div>
  );
};
