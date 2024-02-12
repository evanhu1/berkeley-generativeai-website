import React, { useState, useEffect } from 'react';
import './css/terminal.css'; // Assuming your CSS is in Terminal.css

const Terminal = () => {
  const [typedText, setTypedText] = useState('');
  const commandText = "  EXPORT GENAI_API_KEY='d40a12f0-1126-4d41-8ae4-f598628b11ff' | genai set --model 'Gen-4'";

  useEffect(() => {
    let index = 0;
    const timeoutId = setInterval(() => {
      if (index < commandText.length) {
        setTypedText((prev) => prev + commandText.charAt(index));
        index++;
      } else {
        clearInterval(timeoutId); // Ensure the interval is cleared when all characters are typed
      }
    }, 100); // Adjust typing speed as needed

    return () => clearInterval(timeoutId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      <div className="container_terminal"></div>
      <div className="terminal_toolbar">
        <div className="butt">
          <button className="btn btn-color"></button>
          <button className="btn"></button>
          <button className="btn"></button>
        </div>
        <p className="user">genAI@ocf.berkeley: ~</p>
      </div>
      <div className="terminal_body">
        <div className="terminal_promt">
          <span className="terminal_user">genAI@Berkeley:</span>
          <span className="terminal_location">~</span>
          <span className="terminal_bling">$</span>
          <span className="terminal_text">{typedText}</span>
          <span className="terminal_cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
