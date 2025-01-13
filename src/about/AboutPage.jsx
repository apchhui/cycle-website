import React from 'react';
import './AboutPage.css';

function AboutPage() {
  document.body.style.overflow = 'hidden';
  return (
    <div className="about-page">
      <section className="about-section">
        <h1 className="about-title">О нас</h1>
        <p className="about-content">
          Мы — лидеры* в разработке инновационных программных решений и систем автоматизации для разных отраслей. Мы создаем эффективные и надежные решения, помогающие нашим клиентам достигать новых высот в бизнесе.
          <p>
          * - по версии Cycle Corporation
          </p>
        </p>
      </section>
      <section className="">
        <p className="text">
        </p>
      </section>
      <footer className="footer-about">
        <p>&copy; 2025 Cycle Corporation. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
