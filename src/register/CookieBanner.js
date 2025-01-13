import React, { useState } from 'react';
import './CookieBanner.css';

function CookieBanner() {
  const [visible, setVisible] = useState(true);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible || localStorage.getItem('cookiesAccepted')) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <p>Мы используем куки для улучшения вашего опыта. Продолжая использовать сайт, вы соглашаетесь с этим.</p>
      <button onClick={acceptCookies}>Принять</button>
    </div>
  );
}

export default CookieBanner;