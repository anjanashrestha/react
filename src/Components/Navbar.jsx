import { AppBar, Toolbar, Typography } from "@mui/material";
import "../app.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useState ,useEffect} from "react";

const Navbar = () => {
  const navigate = useNavigate();

  let isLoggedIn = sessionStorage.getItem("session");

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">
          <ul>
            <li>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                {" "}
                <AccountCircleIcon />{" "}
              </Link>
            </li>
            <li>
              <Link to="/register" style={{ textDecoration: "none" }}>
                {" "}
                Register{" "}
              </Link>
            </li>
            {isLoggedIn === "0" ? (
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  Login{" "}
                </Link>{" "}
              </li>
            ) : (
              <button
                className="logout"
                onClick={() => {
                  sessionStorage.setItem("session", "0");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            )}
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
