import logo from './logo.svg';
import './App.css';
import {Home} from "./components/Home/Home"
import{Download} from "./components/Download/Download"
import{Main} from "./components/Main/Main"
// import{Signup} from "./components/main"



import{Route,Routes}from 'react-router-dom'
import{Blog} from "./components/Blog/Blog"

function App() {
  return (
    <div className="App">
  <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route path="/blog" element ={<Blog/>}/>
  <Route path="/download" element ={<Download/>}/>
  <Route path="/main" element ={<Main/>}/>
  {/* <Route path="/signup" element ={<Signup/>}/> */}
  
 {/* <></> <Signup/> */}
</Routes>
{/* <Signup/> */}

{/* <Footer/> */}
    
    </div>
  );
}

export default App;
