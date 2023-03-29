import React, { useState } from "react";
import "./GeneratePassword.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [useSpecialChars, setUseSpecialChars] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let chars = lowercaseChars + uppercaseChars + numericChars;
    if (useSpecialChars) {
      chars += specialChars;
    }
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(password);
  };

  const handleSliderChange = (event: any) => {
    setPasswordLength(event.target.value);
  };

  const handleToggleChange = (event: any) => {
    setUseSpecialChars(event.target.checked);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="App">
      <h1>Random Password Generator</h1>
      <label>Password length:</label>
      <input
        type="range"
        min="8"
        max="20"
        value={passwordLength}
        onChange={handleSliderChange}
      />
      <span>{passwordLength}</span>
      <br />
      <label>
        Use special characters:
        <input
          type="checkbox"
          checked={useSpecialChars}
          onChange={handleToggleChange}
        />
      </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <br />
      {password && (
        <div>
          <p onClick={copyToClipboard} className="password">
            {password}
          </p>
          <button onClick={copyToClipboard}>Copy Password</button>
        </div>
      )}
    </div>
  );
}

export default App;
