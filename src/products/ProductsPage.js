import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';

const products = [
  { id: 1, name: 'Роутер', description: 'Роутер с поддержкой технологии VPN для защиты данных' },
  { id: 2, name: 'Продукт 2', description: 'Описание продукта 2' },
  { id: 3, name: 'Продукт 3', description: 'Описание продукта 3' },
];

function ProductsPage() {
  const [activeCard, setActiveCard] = useState(null); // Для хранения активной карточки
  const navigate = useNavigate();
  document.body.style.overflow = '';
  const handleCardClick = (id) => {
    if (activeCard === id) {
      navigate(`/app${id}`);
    } else {
      setActiveCard(id);
    }
  };

  return (
    <div className="products-page">
      <h1 className="products-title">Наши продукты</h1>
      <div className="products-container">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${activeCard === product.id ? 'active' : ''}`}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="product-card-inner">
              <div className="product-card-front">
                <h2>{product.name}</h2>
              </div>
              <div className="product-card-back">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='product-bottom'>
      <h2 style={{ fontSize: '1rem', color: '#ffffff', textAlign: 'center' }}>
          &copy; 2025 Cycle Corporation. Все права защищены
        </h2>
      </div>
    </div>
  );
}

export default ProductsPage;