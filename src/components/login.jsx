import React, { useEffect, useState } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import { useNavigate,Navigate } from "react-router-dom";
// const navigate=useNavigate
import "./style.css"
import { Theme } from "./theme";

const  Login =()=>{
    const naigate=useNavigate
    
    
    const [text,setText]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name}=e.target
        setText({...text,[name]:e.target.value})
    }
    const [data,setData]=useState([])
    const postData=(text)=>{
        fetch ("http://localhost:3001/users",{
            method: 'POST',
            body: JSON.stringify(text),
            headers: {'Content-Type': 'application/json'}

        })

    }
    const [item,setItem]=useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        fetch("http://localhost:3001/users").then((d)=>d.json()).then((res)=>{
            setItem(res)

        })

    }
  
    
    
    
    
        return (
           
                <div className="main">
                    <Theme/>
                        
                    <div className="email">

                        <h2>Welcome back!</h2>
                        <p className="center">we're so excited to see you again</p>
                        <label> EMAIL OR PHONE NUMBER</label>
                        <input type="text" name="email" id="email" onChange={handleChange} />
                        <label >PASSWORD</label>
                        <input type="text" name="password" id="" onChange={handleChange} />
                        <p ><Link to="/forget" className="link">Forgot your password</Link></p>
                        <button onClick={()=>{
                            item.map((cv)=>{
                                if(cv.email==text.email && cv.password==text.password){
                                    window.location.href="/"

                                    
                                    
                                    

                                }
                                else{
                                    alert("your username or password does not matched ")
                                    
                                
                                    
                                }
                            })
                            
                        
                            
                        
                        }}>Login</button>
                        <p>Need an account ? <Link to="/register" className="link">Register</Link></p>
                    </div>
                    <div className="bar">
                        <img src="https://www.kdab.com/wp-content/uploads/stories/kdab_qr.png" alt="" />
                        <h1>Log in with QR Code</h1>
                        <p>Scan this with the Discord mobile app to log in instatnly</p>

                    </div>
                </div>
        )
    
}
export {Login}