import React, { useState, useEffect } from "react";
 // optional, or style within Auth.css

const Captcha = ({ onChange }) => {
  const [captcha, setCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    onChange(""); // clear input on new captcha
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="captcha-container">
      <div className="captcha-display">{captcha}</div>
      <button type="button" onClick={generateCaptcha} className="captcha-refresh">
        ↻
      </button>
      <input
        type="text"
        placeholder="Enter CAPTCHA"
        className="auth-input"
        onChange={(e) => onChange(e.target.value)}
      />
      <input type="hidden" value={captcha} readOnly />
    </div>
  );
};

export default Captcha;
