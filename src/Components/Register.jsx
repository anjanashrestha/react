import React from "react";
import { useState, useEffect } from "react";
import "../app.css";
import Navbar from "./Navbar";
import FormInput from "./FormInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 20,
  p: 2,
};
const getFormValues = () => {
  const storedValues = localStorage.getItem("form");
  if (!storedValues)
    return {
      username: "",
      email: "",
      birthdate: "",
      password: "",
      confirmPassword: "",
    };
  return JSON.parse(storedValues);
};
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if(!localStorage.getItem("register"))
    {
        localStorage.setItem("register","[]");
    }
  }, []);
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthdate",
      type: "date",
      placeholder: "birthdate",
      label: "Birthdate",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password should be at least 8 characters long and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    var msto = [];
    var isUnique = true;
    msto = JSON.parse(localStorage.getItem("register"));
    msto.forEach(element => {
    if(element.email === values.email){
      isUnique = false;
      return;
    }
    });
    if(isUnique)
    {
      
     msto.push(values);
     localStorage.setItem("register", JSON.stringify(msto));
     handleOpen();
    }else{
        console.log("unique bhayena");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setTimeout(function () {
      handleClose();
    }, 900);
  };
  const handleClose = () => {
    setOpen(false);

    navigate("/login");
  };

  const handleClick = () => {
    setOpen(false);
    navigate("/login");
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1> Register </h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div>
          <button className="butto">Submit</button>
          <p onClick={handleClick} className="log">
            Already registered? log in
          </p>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-title" variant="h5" component="h2">
                Success!!
              </Typography>
              <Typography id="modal-description" sx={{ mt: 1 }}>
                You registered succesfully!
              </Typography>
             
            </Box>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default Register;
