import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message && isValidEmail(email)) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const isValidEmail = (email) => {
    // Regex pattern to validate email format
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} required />
        </label>
        {emailError && <p className="error">Please enter a valid email address.</p>}
        <label>
          Message:
          <textarea value={message} onChange={handleMsgChange} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
