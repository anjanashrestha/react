
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import "./app.css";

const App = () => {
    return (
        <Router>
          <div className="main">
          <Navbar />
         <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
         </Routes></div>
         
       
       </Router>
    );
  };
  
  export default App;