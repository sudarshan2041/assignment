import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import "./style.scss";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loginCreds, setLoginCreds] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    if (loginCreds.userName === "" && loginCreds.password === "") {
      navigate("/login");
    }
  }, [loginCreds]);

  function handleCheckBox(e) {
    setShowPassword(e.target.checked);
  }

  function onChangeText(e) {
    e.preventDefault();
    let updatedObj = loginCreds;
    updatedObj[e.target.name] = e.target.value;
    setLoginCreds(updatedObj);
  }

  function onSubmit() {
    if (
      loginCreds.userName === "test@mail.com" &&
      loginCreds.password === "Test@123"
    ) {
      setError(false);
      navigate("/dashboard");
    } else if (loginCreds.emailId === "" && loginCreds.password === "") {
      setError(true);
      setErrorMsg("Please enter email and password");
    } else {
      setError(true);
      setErrorMsg("Invalid credentials");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <Input
          label={"User Name"}
          name={"userName"}
          type={"text"}
          handleChange={onChangeText}
        />

        <Input
          label={"Password"}
          name={"password"}
          type={"password"}
          showPassword={showPassword}
          handleChange={onChangeText}
          handleselect={handleCheckBox}
        />

        {error && <p className="login-error">{errorMsg}</p>}

        <Button btnName={"Login"} handleSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Login;
