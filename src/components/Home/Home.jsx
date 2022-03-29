import React from "react";
import "./Home.css";
import{Navbar} from "./Navbar";
import{Footer}from"./Footer"

export const Home = () => {
  return (
      <div>
          <Navbar/>
          <div className="container2">
            <div class="sub">
            <img src="images/sub-img1.svg" alt="image"/>
            <div class="sub-text">
                <h1>Create an<br/> invite-only<br/> place where you<br/> belong</h1>
                <p>Discord servers are organized into topic-<br/>based channels where you can collaborate,<br/> share, and just talk about your day without<br/> clogging up a group chat.</p>
            </div>
        </div>
      </div>

<div class="container2" style={{background: `rgb(247,247,246)`}}>
<div class="sub">
    <div class="sub-text">
        <h1>Where hanging<br/> out is easy</h1>
        <p>Grab a seat in a voice channel when you’re<br/> free. Friends in your server can see you’re<br/> around and instantly pop in to talk without<br/> having to call.</p>
    </div>
    <img src="images/sub-img2.svg" alt="image"/>
</div>
</div>

<div class="container2">
        <div class="sub">
            <img src="images/sub-img3.svg" alt="image"/>
            <div class="sub-text">
                <h1>From few to a<br/> fandom</h1>
                <p>Get any community running with moderation<br/> tools and custom member access. Give<br/> members special powers, set up private<br/> channels, and more.</p>
            </div>
        </div>
    </div>


    <div class="container3">
        <div className="sub" style={{paddingtop:`0`}}>
            <div class="sub-text">
                <div>
                    <h1 style={{textalign: `center`, fontfamily: `Tienne,serif`}}>RELIABLE TECH FOR STAYING CLOSE</h1>
                    <p style={{textalign: `center`, margintop: `0`}}>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their<br/> games, or gather up and have a drawing session with screen share.</p>
                </div>

                <img src="images/sub-img4.svg" alt="image" class="sub-img-big"/>

                <div class="ready-to-start">

                    <h2>Ready to start your journey?</h2>
                </div>

                <div class="windows-button-last" style={{background:`url("images/bg-star.svg")`}}>
                    <a href="#">Download for Windows</a>
                </div>
            </div> 
         </div>
    </div>
    <Footer/>
      </div>
      
    
  );
};
