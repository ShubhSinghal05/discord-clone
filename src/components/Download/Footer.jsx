import React from "react";
import "./Footer.css"

export const Footer = ()=>{
    return(
        <div>
         <div class="footer">
         <div class="footer-top">
         <div class="footer-top-1">
         <h1>IMAGINE A<br/> PLACE</h1>
         <a href="#">
                    <img class="usa" src="images/usa.png" alt="usa"/>English, USA <span><img style={{width: `13px`, height: `13px`}} src="images/down.png" alt=""/></span>
                </a>
                <div class="icons">
                    <img src="images/twitter.svg" alt=""/>
                    <img src="images/instagram.svg" alt=""/>
                    <img src="images/facebook.svg" alt=""/>
                    <img src="images/youtube.svg" alt=""/>
                </div>
         </div>
         <div class="footer-top-2">
         <div>
                    <h5>Product</h5>
                    <ul>
                        <li>Download</li>
                        <li>Nitro</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div>
                    <h5>Company</h5>
                    <ul>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Branding</li>
                        <li>Newsroom</li>
                    </ul>
                </div>
                <div>
                    <h5>Resources</h5>
                    <ul>    
                        <li>College</li>
                        <li>Support</li>
                        <li>Saftey</li>
                        <li>Blog</li>
                        <li>Feedback</li>
                        <li>Developers</li>
                        <li>StreamKit</li>
                    </ul>
                </div>
                <div>
                    <h5>Policies</h5>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookie Settings</li>
                        <li>Guidelines</li>
                        <li>Acknowledgments</li>
                        <li>Licenses</li>
                        <li>Moderation</li>
                    </ul>
                </div>
         </div>

         </div>
         <div class="footer-bottom">
            <img src="images/main-logo.svg" alt="logo"/>
            <div class="open-discord-2">
                <a class href="#">Open Discord</a>
            </div>
        </div>
    </div>
         
         </div>
    
    )
}