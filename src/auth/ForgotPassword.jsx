import React, { useState } from "react";
import Captcha from "./Captcha";
import "./Auth.css";

const ForgotPassword = () => {
  const [captchaInput, setCaptchaInput] = useState("");
  const [realCaptcha, setRealCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== realCaptcha) {
      alert("Incorrect CAPTCHA");
      return;
    }
    alert("Password reset link sent!");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" className="auth-input" required />

          <Captcha
            onChange={(val) => setCaptchaInput(val)}
            setCaptchaText={setRealCaptcha}
          />

          <button type="submit" className="auth-button">Send Reset Link</button>
        </form>
        <div className="auth-footer">
          <p>Back to <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
