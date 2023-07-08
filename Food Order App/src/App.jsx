import React from "react";
import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "./authentication/Login";
import Home from './authentication/Home'
import Register from "./authentication/Register";
import ARegister from "./authentication/Admin";
import Public from "./Routes/Public";
import Private from "./Routes/Private";
import AdminDashboard from "./Admindashboard/AdminDashboard";
import Addacademimanager from "./Admindashboard/Addacademimanager";
import Viewacademymanager from "./Admindashboard/Viewacademymanager";
import Viewacademy from "./Admindashboard/Viewacademy";
import ViewBranch from "./Admindashboard/ViewBranch";
import Viewcourse from "./Admindashboard/Viewcourse";


const App=()=>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Private><Home/></Private>}/>
 {/* <Route path="/login" element={<Login/>} />
 <Route path="/home" element={<Home/>}/> */}
 <Route path="/Register" element={<Register/>}/>
 <Route path="/admin" element={<ARegister/>}/>
 <Route path="/login" element={<Public><Login/></Public>}/>
 <Route path="/Register" element={<Public><Register/></Public>}/>

 <Route path="/dashboard" element={<AdminDashboard/>}/>
 <Route path="/add" element={<Addacademimanager/>}/>
 <Route path="/academymanager" element={<Viewacademymanager/>}/>
 <Route path="/viewacademy" element={<Viewacademy/>}/>
 <Route path="/viewbranch" element={<ViewBranch/>}/>
 <Route path="/viewcourse" element={<Viewcourse/>}/>





 
            </Routes>
        </Router>
    )
}

export default App