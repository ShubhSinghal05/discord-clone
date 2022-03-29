import "./style.css"
import { Link } from "react-router-dom"
import { Theme } from "./theme"
export const Verfiya=()=>{
    return(
        <div className="main" style={{
            width:"40%",
            height:"350px",
            marginTop:"150px",
            color: "white",
            
            
        }}>

            <div>
            

                <img src="../image/ver.svg" alt="" />
                <h3>Create an account</h3>
                <p>Beep boop.Boop beep? </p>
                <div className="nav">
                    <div>

                        <input type="checkbox" name="" id="" />
                        <span>I am human</span>
                    </div>
                    <div>
                        <img src="../image\Screenshot 2022-02-26 111252.jpg" alt="" />
                        <p ><Link to="/privacy" className="white">Privacy</Link>- <Link to="/terms" className="white
                        ">Terms</Link></p>
                    </div>

                 </div>

            </div>
        </div>
    )
}