import * as React from 'react';
import { useState ,useEffect} from "react";
import "../app.css";
import FormInput from "./FormInput";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const give_pop = ()=>{
    handleClick();
  
  }
  const navigate = useNavigate();
  useEffect(() => {
    give_pop();
    let isLoggedIn = sessionStorage.getItem('session');
    if(isLoggedIn === "1"){
     console.log("Logged in");
    
    }else
    {
     console.log( "Goto login page");
     navigate("/login");
  
    }
  }, []);
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
      </IconButton>
    </React.Fragment>
  );
  // give_pop();
    return (
      <div className="profile">
       <h1>Your Profile</h1>
       <Snackbar
        open={open}
        autoHideDuration={1600}
        onClose={handleClose}
        message="logged in successfully"
        action={action}
      />
      </div>
    );
  };
  
  export default Profile;
