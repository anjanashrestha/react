import { useState, useEffect } from "react";
import React from "react";
import "../app.css";
import FormInput from "./FormInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("0");
  const inputs = [
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
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      // errorMessage:"Password should be at least 8 characters long and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("register"))
    {
        localStorage.setItem("register","[]");
    }
    let isLoggedIn = sessionStorage.getItem("session");
    if (isLoggedIn === "1") {
      console.log("Logged in");
      navigate("/profile");
    } else {
      console.log("You can go to login page ");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    var all_data = JSON.parse(localStorage.getItem("register"));
  
    console.log(all_data);
    console.log("******");
    all_data.forEach((data) => {
      console.log(data);
      // var result = JSON.parse(data);
      var { email, password } = data;
      console.log(email, password);
      if (email === values.email && password === values.password) {
        handleClickIt();
        return;
      } else {
        setError(<p className="errors">incorrect email or password </p>);
        console.log("incorrect entry");
        return;
      }
    });
  };

  const onChange = (e) => {
    setError("0");
    setValues({ ...values, [e.target.name]: e.target.value }); //updates values immediately
  };
  const handleClickIt = () => {
    setOpen(false);
    sessionStorage.setItem("session", "1");
    navigate("/profile");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="appli">
      <form onSubmit={handleSubmit}>
        <h1> Login </h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {error !== "0" ? error : ""}
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
