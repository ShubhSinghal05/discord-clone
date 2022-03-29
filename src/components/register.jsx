import { useState } from "react"
import "./style.css"
import { Link } from "react-router-dom"
export  const Register=()=>{
    const [text,setText]=useState({
        email:"",
        username:"",
        password:"",
        dob:""
    })
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        const {name}=e.target
        setText({...text,[name]:e.target.value})
    }
    const postData=(data)=>{
        fetch ("http://localhost:3002/users",{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}

        })

    }
    
    return (
        <div className="register-main">
            <form action="" className="form">

                <h1>Create an account</h1>
                <span>EMAIL</span>
                <input type="text"  name="email" onChange={handleChange}/>
                <span>USERNAME</span>
                <input type="text" name="username" id="" onChange={handleChange} />
                <span>PASSWORD</span>
                <input type="text" name="password" id="" onChange={handleChange}/>
                <span>DATE OF BIRTH</span>
                <input type="date" name="dob" id=""onChange={handleChange} />
                
                <button onClick={()=>{
                    postData(text)
                }}>Continue</button>
                <p > <Link to="/login" className="link">Already have an account</Link></p>
                <p>By registering,you agree to Discord's  <Link to="/terms" className="link">Terms of Service</Link > and <Link to="/privacy" className="link">Privacy Policy</Link></p>
            </form>
        </div>
    )
}