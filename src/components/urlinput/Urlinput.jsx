import React, { useState } from 'react'
import './urlinput.css'

function Urlinput({ onSubmit }) {
  const [url, setUrl] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const inputUrl = event.target.value;
    setUrl(inputUrl);

    // Add validation logic here
    if (!isValidURL(inputUrl)) {
      setFeedback('Please enter a valid URL');
    } else {
      setFeedback('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(url);
  };

  const isValidURL = (inputUrl) => {
    // Basic URL validation logic
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(inputUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter URL"
      />
      {feedback && <span style={{ color: 'red' }}>{feedback}</span>}
      <button type="submit">Audit</button>
    </form>
  );
}

export default Urlinput;
