import { Navabr } from "./navbar"
import { Routes,Route } from "react-router-dom"
import {Login} from "./login"
import { Register } from "./register"
import { Terms } from "./terms"
import { Privacy } from "./privacy"
import { Forget } from "./forget"
import { Verfiya } from "./verfiya"

export const Signup=()=>{
    return (
        <div>
            {/* <Navabr/> */}
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/terms" element={<Terms/>}></Route>
                <Route path="/privacy" element={<Privacy/>}></Route>
                <Route path="/forget" element={<Forget/>}></Route>
                <Route path="/ver" element={<Verfiya/>}></Route>
                </Routes>

        </div>
    )
}