import React, { useState } from "react";
import Captcha from "./Captcha";
import "./Auth.css";

const Login = () => {
  const [captchaInput, setCaptchaInput] = useState("");
  const [realCaptcha, setRealCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== realCaptcha) {
      alert("Incorrect CAPTCHA");
      return;
    }
    alert("Login Successful!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login to DevConnect</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />

          <Captcha
            onChange={(val) => setCaptchaInput(val)}
            setCaptchaText={setRealCaptcha}
          />

          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-footer">
          <a href="/forgot-password">Forgot Password?</a>
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
