import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import TutorialPage from './tutorials/TutorialPage';
import AboutPage from './about/AboutPage';
import ProductsPage from './products/ProductsPage';
import Product1 from './products/product/product1';
import Product2 from './products/product/product2';
import Main from './main/Main';
import PPage from './tutorials/tutorial/python/PPage';
import Product3 from './products/product/product3';
import CalculatorPage from './tutorials/tutorial/python/Calc';
import DatabasePage from './tutorials/tutorial/python/DataBase';
import MatplotlibPage from './tutorials/tutorial/python/Graphics';
import CppGuessNumberPage from './tutorials/tutorial/c/GuessNum';
import CppRandomGeneratorPage from './tutorials/tutorial/c/CppGenPage';
import CppVectorPage from './tutorials/tutorial/c/CppVectorPage';
import CppTutorialsPage from './tutorials/tutorial/c/cpp';
import JsDomPage from './tutorials/tutorial/javascript/JsDomPage';
import JsFetchPage from './tutorials/tutorial/javascript/JsFetchPage';
import JsReactPage from './tutorials/tutorial/javascript/JsReactPage';
import JsTutorialsPage from './tutorials/tutorial/javascript/JsTutorialPage';
import RegisterPage from './register/RegisterPage'; // Импорт страницы регистрации
import LoginPage from './register/LoginPage'; // Импорт страницы входа
import CookieBanner from './register/CookieBanner'; // Импорт уведомления о куки
import './App.css';

function App() {
  return (
    <Router>
      <CookieBanner /> {/* Уведомление о куки */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/app1" element={<Product1 />} />
        <Route path="/app2" element={<Product2 />} />
        <Route path="/app3" element={<Product3 />} />
        <Route path="/main" element={<Main />} />
        <Route path="/tutorials" element={<TutorialPage />} />
        <Route path="/tutorials/python" element={<PPage />} />
        <Route path="/tutorials/python/0" element={<CalculatorPage />} />
        <Route path="/tutorials/python/1" element={<DatabasePage />} />
        <Route path="/tutorials/python/2" element={<MatplotlibPage />} />
        <Route path="/tutorials/c++" element={<CppTutorialsPage />} />
        <Route path="/tutorials/c/2" element={<CppGuessNumberPage />} />
        <Route path="/tutorials/c/0" element={<CppRandomGeneratorPage />} />
        <Route path="/tutorials/c/1" element={<CppVectorPage />} />
        <Route path="/tutorials/javascript" element={<JsTutorialsPage />} />
        <Route path="/tutorials/js/0" element={<JsFetchPage />} />
        <Route path="/tutorials/js/1" element={<JsReactPage />} />
        <Route path="/tutorials/js/2" element={<JsDomPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Страница регистрации */}
        <Route path="/login" element={<LoginPage />} /> {/* Страница входа */}
      </Routes>
    </Router>
  );
}

export default App;