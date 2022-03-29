// import logo from './logo.svg';
import './Download.css';
import {Footer} from './Footer'
import Popup from 'reactjs-popup';
import head from './Images/1.png';
import last1 from './Images/last1.svg';
import last2 from './Images/last2.svg';
import last3 from './Images/last3.svg';
import last4 from './Images/last4.svg';

export const Download = ()=> {
  return (
    <div className="Download">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
    <div>
    <div className="container" style={{ 
        backgroundImage: `url("images/bg.svg")`
      }}>
      <div className="navbar">
        <a href="http://localhost:3001/"><img src="images/main-logo.svg" alt="" /></a>
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
    </div>
    </div>
      <div className="Download-top-Section-21" style={{ fontFamily: `Whitney,Helvetica Neue,Helvetica,Arial,sans-serif`}}>
        <div className="Download-top-Section-1">
          <h1 className="Download-top-header" style={{ fontFamily: `"Ginto Nord","Whitney","Helvetica Neue","Helvetica","Arial",sans-serif`}}>GET DISCORD FOR ANY DEVICE</h1>
          <p className="Download-top-p">An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
          <div className="Download-top-button-section">
              <a href="//discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86"><button className="Download-top-button"><i className="uil uil-import Download-Section-top-inside-btn"></i>  Download for Windows</button></a>
              <div className="Download-top-button-side">Windows 7 or higher</div>
          </div>
        </div>
        <div className="Download-top-img-display"><img className="Download-top-Section-img Download-top-Section-2" src= {head} alt="" /></div>
        
      </div>
      <div className="Download-last-Section">
        <div className="Download-last-Section-in">
          <h6>iOS</h6>
          <a href="https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3Ffingerprint%3D945558709629767680.vR240lOHKc9I7d3-BV5mP4e9_Zs%26attemptId%3D585c91c2-c12a-4646-ba1f-614a8984b95b&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Your%20place%20to%20talk%20with%20communities%20and%20friends.&efr=1" target="_blank"><button className="Download-last-download-button">Download</button>
          <img className="Download-last-download-img1" src= {last1} alt="" /></a>
        </div>
        <div className="Download-last-Section-in o11">
          <h6>Android</h6>
          <a href="https://discordapp.page.link/?link=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.discord%26fingerprint%3D945558709629767680.vR240lOHKc9I7d3-BV5mP4e9_Zs%26attemptId%3D76abad8f-5aa6-471f-925a-68352af303ad&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Your%20place%20to%20talk%20with%20communities%20and%20friends.&efr=1" target= "_blank"><button className="Download-last-download-button">Download</button></a>
          
          <img className="Download-last-download-img1"  src= {last2} alt="" />
        </div>
        <div className="Download-last-Section-in o13">
          <h6 className="Download-last-download-Linux">Linux</h6>
          <Popup trigger={<button className="Download-last-download-button">Download <i class="uil uil-angle-down Download-Section-top-inside-btn"></i></button>} 
            position="bottom right">
              <div className="Download-show-linux">
                <a href="//discord.com/api/download?platform=linux&format=deb" target="_blank"><div>deb</div></a>
                <a href="//discord.com/api/download?platform=linux&format=tar.gz" target="_blank"><div>tar.gz</div> </a>
              </div>     
          </Popup>

          {/* <div className="Download-show-linux">
            <div>deb</div>
            <div>tar.gz</div>
          </div> */}
          <img className="Download-last-download-img11"  src= {last3} alt="" />
        </div>
        <div className="Download-last-Section-in o12">
          <h6>Mac</h6>
          <a href="//discord.com/api/download?platform=osx" target="_blank"><button className="Download-last-download-button">Download</button></a>
          <img className="Download-last-download-img1"  src= {last4} alt="" />
        </div>
        <div className="Download-last-Section-in1 o13">
            <h6 className="Download-last-5-head">Feeling experimental?</h6>
            <p className="Download-last-5-p">Try our Public Test Build and test new features before they launch.</p>
            {/* <button className="Download-last-download-button">Download Public Test Build <i class="uil uil-angle-down Download-Section-top-inside-btn"></i></button> */}
            <Popup trigger={<button className="Download-last-download-button">Download Public Test Build <i class="uil uil-angle-down Download-Section-top-inside-btn"></i></button>} 
            position="bottom right">
              <div className="Download-show-public-test">
                <a href="//discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x86" target="_blank"><div>Windows</div> </a>
                <a href="//discord.com/api/download/ptb?platform=linux&format=deb" target="_blank"><div>Linux deb</div></a> 
                <a href="//discord.com/api/download/ptb?platform=linux&format=tar.gz" target="_blank"><div>Linux tar.gz</div></a>
                <a href="//discord.com/api/download/ptb?platform=osx" target="_blank"><div>Mac</div></a>
              </div>     
          </Popup>

        </div>
      </div>
      <Footer />
    </div>
  );
}

// export default Download;
