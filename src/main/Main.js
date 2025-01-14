import React, { useState, useEffect } from 'react';
import './Main.css';

function Main() {
  const [showArrow, setShowArrow] = useState(true);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.about');
    nextSection.scrollIntoView({ behavior: 'smooth' });
    setShowArrow(false); // Скрытие стрелочки после клика
  };

  // Показываем стрелочку, если пользователь прокрутил вверх
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  document.body.style.overflow = '';
  document.addEventListener('DOMContentLoaded', function () {
      window.scrollTo(0, 0);
  });

  return (
    <div className="main-page">
      <section className="hero">
        <h1 className="hero-title">Добро пожаловать в Cycle Corporation</h1>
        <p className="hero-subtitle">Инновационные решения для вашего бизнеса</p>
        {showArrow && (
          <div className="scroll-arrow" onClick={scrollToNextSection}>
            <span className="arrow-icon">&#8595;</span>
          </div>
        )}
      </section>

      <section className="about">
        <h2 className="section-title">О нас</h2>
        <p className="section-text">
          Cycle Corporation — это команда, разрабатывающая программное обеспечение, создающая современные веб-сайты и предоставляющая комплексные IT-решения.
        </p>
        <pre className="code-block">
          <code>
            <div className="code-header">C++</div>
            <hr />
            <span className="keyword">#include</span> <span className="value">&lt;iostream&gt;</span><br />
            <span className="keyword">using</span> <span className="value">namespace</span> <span className="value">std</span>;<br /><br />
            <span className="keyword">int</span> <span className="variable">main</span>()
            <span className="bracket"> &#123;</span><br />
            &nbsp;&nbsp;<span className="variable">cout</span> <span className="operator">&lt;&lt;</span>
            <span className="string"> "Hello, World!"</span> <span className="operator">&lt;&lt;</span> <span className="variable">endl</span>;<br />
            &nbsp;&nbsp;<span className="keyword">return</span> <span className="value">0</span>;<br />
            <span className="bracket">&#125;</span>
          </code>
        </pre>
      </section>

      <section className="services">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Разработка ПО</h3>
            <p>Создаём масштабируемые и надёжные приложения на различных языках программирования.</p>
          </div>
          <div className="service-card">
            <h3>Разработка сайтов</h3>
            <p>От лендингов до сложных порталов — мы создаём сайты, которые привлекают внимание.</p>
          </div>
          <div className="service-card">
            <h3>Техническая поддержка</h3>
            <p>Мы всегда на связи, чтобы помочь вам решить любые вопросы с IT-инфраструктурой.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Cycle Corporation. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default Main;