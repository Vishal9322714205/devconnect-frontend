import React, { useState, useEffect } from "react";
import Captcha from "./Captcha";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState("");

  // Timer countdown effect
  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && otpSent) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email.trim()) {
      setError("Please enter a valid email.");
      return;
    }

    // Validate CAPTCHA
    if (!captchaInput.trim()) {
      setError("Please enter the CAPTCHA.");
      return;
    }

    // Case-insensitive comparison
    if (captchaInput.toUpperCase() !== captchaText.toUpperCase()) {
      setError("Incorrect CAPTCHA. Please try again.");
      setCaptchaInput("");
      return;
    }

    // If all validations pass
    alert(`OTP sent to ${email}`);
    setOtpSent(true);
    setTimer(30); // 30 seconds for demo (change to 300 for 5 minutes)
    setCanResend(false);
  };

  const handleResend = () => {
    if (!canResend) return;
    
    alert(`Resent OTP to ${email}`);
    setTimer(300); // Reset timer
    setCanResend(false);
    setCaptchaInput("");
    setError("");
  };

  const getTimeString = (sec) => {
    return `${Math.floor(sec / 60).toString().padStart(2, "0")}:${(sec % 60).toString().padStart(2, "0")}`;
  };

  const TimerDisplay = () => {
    return (
      <div className="timer-container">
        <div className="time-left">Time left: {getTimeString(timer)}</div>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${(timer / 300) * 100}%` }}
          ></div>
        </div>
        {canResend && (
          <button 
            type="button"
            className="resend-button"
            onClick={handleResend}
          >
            Resend OTP
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={otpSent && timer > 0}
            required
          />

          <Captcha 
            onChange={setCaptchaInput}
            setCaptchaText={setCaptchaText}
          />

          {error && <div className="error-message">{error}</div>}

          {otpSent ? (
            <TimerDisplay />
          ) : (
            <button type="submit" className="auth-button">
              Send OTP
            </button>
          )}
        </form>
        <div className="auth-footer">
          <p>
            Back to <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;