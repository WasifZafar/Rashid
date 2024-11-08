import React, { useState, useEffect } from 'react';
import './styles/cv.css';

const CV = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDownloading, setDownloading] = useState(false);
  const [error, setError] = useState('');

  const cvLink = "./cv/Resume new.pdf";

  const downloadFile = async () => {
    if (!cvLink) {
      setError('Download link is not available.');
      return;
    }

    setDownloading(true);
    setError('');

    try {
      const response = await fetch(cvLink, { method: 'HEAD' });

      if (response.ok) {
        setModalOpen(true);
        sessionStorage.setItem('isModalOpen', 'true');

        try {
          window.open(cvLink, '_blank');
        } catch (error) {
          console.error('Failed to open download link in a new tab', error);
        }
      } else if (response.status === 404) {
        setError('Error: File not found (404). Please check the link.');
      } else {
        setError('Error: Unable to initiate download. Please try again later.');
      }
    } catch (networkError) {
      setError('Error: Network issue. Please check your connection.');
      console.error('Network error:', networkError);
    } finally {
      setDownloading(false);
      removeErrorMessageAfterTimeout();
    }
  };

  const removeErrorMessageAfterTimeout = () => {
    const timer = setTimeout(() => {
      setError('');
    }, 5000);
    return () => clearTimeout(timer); // Cleanup to prevent memory leak
  };

  useEffect(() => {
    const savedModalState = sessionStorage.getItem('isModalOpen');
    if (savedModalState === 'true') {
      setModalOpen(true);
    }
  }, []);

  const handleOkClick = () => {
    setModalOpen(false);
    sessionStorage.setItem('isModalOpen', 'false');
  };

  return (
    <div className="container">
      <div className="download-container">
        <button
          className="download-button glow-on-hover"
          onClick={downloadFile}
          disabled={isDownloading}
        >
          {isDownloading ? 'Checking...' : 'Download CV'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Download Initiate!</p>
            <button className="ok-button" onClick={handleOkClick}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CV;
