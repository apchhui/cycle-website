import React from 'react';
import './Product1.css';

function Product2() {
  return (
    <div className="product-page">
      <div className="product-content">
        <h1>Продукт 2</h1>
        <p className="coming-soon">🚧 Ещё в разработке 🚧</p>
        <p className="description">
          Мы активно работаем над этим продуктом. Следите за обновлениями, чтобы первыми узнать о его выходе!
        </p>
        <div className="cta-buttons">
          <a href="/products" className="cta-button">Вернуться к продуктам</a>
          <a href="/" className="cta-button">На главную</a>
        </div>
      </div>
    </div>
  );
}

export default Product2;