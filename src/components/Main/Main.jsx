import './Main.css';
import Popup from 'reactjs-popup';
import compass from './Images/compass.png'
import download from './Images/download.png'
import Friend from './Images/f.png'
import msg from './Images/a.png'
import img from './Images/img.png'
import que from './Images/Q.png'
import Mic from './Images/Micro.png'
import Headphones from './Images/HD.png'
import Settings from './Images/Setting.png'
import { useNavigate } from 'react-router-dom';
// import Online from './online';

import {FaRegHeart} from 'react-icons'

export const  Main = ()=> {

    return (
        <div>
            <script src="https://kit.fontawesome.com/f2438d53ac.js" crossorigin="anonymous"></script>
            <div className="main">
                <div className="main-show-icon">

                    <Popup trigger={<img className="main-discord-icon" src="https://www.svgrepo.com/show/331368/discord-v2.svg" alt="img" />}
                        position="right center">
                        <div className="main-discord-icon-display">Home</div>
                    </Popup>
                    <Popup trigger={<div className="main-discord-icon-plus">+</div>}
                        position="right center" >
                        <div className="main-discord-icon-display">Add a Server</div>
                    </Popup>
                    <Popup trigger={<div className="main-discord-icon-compass-bg"></div>}
                        position="right center">
                        <div className="main-discord-icon-display">Explore Sublic Servers</div>
                    </Popup>
                    <Popup trigger={<div></div>}
                        position="right center">
                        <div className="main-discord-icon-display">Download Apps</div>
                    </Popup>
                </div>

                <div className="main-main">
                    <div className="main-discord-search-section">
                        <div className="main-discord-search-section-01">
                            <input type="text" className="main-discord-search-input" placeholder="Find or start a conversation" />
                            <hr/>
                            
                            <button className="main-discord-search-btn1">Friends</button>
                            <button className="main-discord-search-btn2">Nitro</button>
                            <button className="main-discord-search-btn3">DIRECT MESSAGES +</button>
                            <button className="main-discord-search-btn4"></button>




                        </div>
                        <div className="main-discord-search-section-02">
                            <div className="main-discord-search-section-02-1">
                                // <img className="main-discord-search-icon" alt="img" src="data:image/png;base64,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" />
                                <div className="main-discord-search-section-02-11">
                                    <h6>User</h6>
                                    <div className="main-discord-search-section-user-code">#4648</div>
                                </div>
                            </div>
                            <div className="main-discord-search-section-02-2">
                                <img className="main-discord-search-section-mic" src ={Mic} />
                                <img className="main-discord-search-section-headphone" src ={Headphones} />
                                <img className="main-discord-search-section-setting" src ={Settings} />
                            </div>
                        </div>
                    </div>
                    <div className="main-discord-show-section">
                        <div className="main-discord-show-section-01">
                            <div className="main-discord-show-section-011">
                                <img className="main-discord-show-section-frnd-icon" alt="img" src={Friend} />
                                <button className="main-discord-show-section-btn">Friends</button>
                                <span className="main-discord-show-section-dash" >|</span>
                                <button className="main-discord-show-section-btn">Online</button>
                                <button className="main-discord-show-section-btn">All</button>
                                <button className="main-discord-show-section-btn">Pending</button>
                                <button className="main-discord-show-section-btn">Blocked</button>
                                <button className="main-discord-show-section-btn1">Add Friends</button>
                            </div>
                            <div className="main-discord-show-section-012">
                                <Popup trigger={
                                    <div>
                                        <img className="main-discord-show-section-012-icon" alt="img" src={msg} />
                                        <span className="main-plus-edit">+</span>
                                    </div>
                                }
                                    position="bottom center">
                                    <div className="main-discord-icon-display">New Group DM</div>
                                </Popup>
                                <div className="main-discord-show-section-dash">|</div>
                                <Popup trigger={
                                    <div>
                                        <img className="main-discord-show-section-012-icon1" alt="img" src={img} />
                                    </div>
                                }
                                    position="bottom center">
                                    <div className="main-discord-icon-display">Inbox</div>
                                </Popup>

                                <Popup trigger={<img className="main-discord-show-section-012-icon2" alt="img"src={img} />}
                                    position="bottom center">
                                    <div className="main-discord-icon-display">Help</div>
                                </Popup>
                            </div>
                        </div>
                        <div className="main-discord-show-section-02">
                            <div className="main-discord-show-section-02-1">

                                <h2 className="addFrnd">ADD FRIEND</h2>
                                <h4 className="tag">You can add a friend with their Discord Tag. It's cAsE sEnSitIVe!</h4>
                                <div>
                                    <input type="text" className="main-discord-search-input username" placeholder="Enter a Username#0000" />
                                <button ><div>Send Friend Request</div></button>
                                </div>

                            </div>
                            <div className="main-discord-show-section-02-2">
                                <div className="main-discord-show-section-dash-01"></div>
                                <div className="main-discord-show-section-02-21">
                                    <h3>Active Now</h3>
                                    <h5>It's quiet for now...</h5>
                                    <p>When a friend starts an activtiy——like pa=laying a game or hanging out on voice——we'll show it here!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;