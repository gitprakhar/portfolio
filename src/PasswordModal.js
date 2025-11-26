import React, { useState, useEffect, useRef } from 'react';
import './PasswordModal.css';

function PasswordModal({ isOpen, onSubmit, onCancel, onRequestPassword, projectName }) {
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setPassword('');
      setHasError(false);
      // Focus the input after a small delay to ensure it works on mobile
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = onSubmit(password);
    if (result === false) {
      setHasError(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (hasError) {
      setHasError(false);
    }
  };

  const handleRequestPassword = () => {
    onRequestPassword();
  };

  if (!isOpen) return null;

  return (
    <div className="password-modal-overlay">
      <div className="password-modal">
        <h2 className="password-modal-title">{projectName || 'This project'} requires a password</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={`password-modal-input ${hasError ? 'error' : ''}`}
            placeholder="Enter password"
          />
          <div className="password-modal-buttons">
            <button type="submit" className="password-modal-button primary">
              Submit
            </button>
            <button type="button" onClick={onCancel} className="password-modal-button secondary">
              Cancel
            </button>
          </div>
          <div className="password-modal-footer">
            <span className="password-modal-footer-text">Don't have the password? </span>
            <a href="#" onClick={(e) => { e.preventDefault(); handleRequestPassword(); }} className="password-modal-link">
              Request Password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordModal;
