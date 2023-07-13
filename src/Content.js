import React, { useState } from 'react';
import './Content.css';

const Content = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    const textareaValue = document.getElementById('textarea').value;
    setDisplayText(textareaValue);
  };

  return (
    <div className="content">
      <textarea id="textarea" className="textarea" />
      <button onClick={handleButtonClick} className="button">Display Text</button>
      <p className="display-text">{displayText}</p>
    </div>
  );
};

export default Content;
