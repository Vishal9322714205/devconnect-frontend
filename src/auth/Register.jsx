import React, { useState } from "react";
import Captcha from "./Captcha";
import "./Auth.css";

const Register = () => {
  const [captchaInput, setCaptchaInput] = useState("");
  const [realCaptcha, setRealCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== realCaptcha) {
      alert("Incorrect CAPTCHA");
      return;
    }
    alert("Registration Successful!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Join DevConnect</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="auth-input" required />
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          <input type="password" placeholder="Confirm Password" className="auth-input" required />
          
          <Captcha
            onChange={(val) => setCaptchaInput(val)}
            setCaptchaText={setRealCaptcha}
          />

          <button type="submit" className="auth-button">Register</button>
        </form>
        <div className="auth-footer">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
