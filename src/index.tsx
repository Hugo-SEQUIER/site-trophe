import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

import Home from './homepage/Home'
import Menu from './components/Menu'
import Team from './team/page';
import Roadmap from './roadmap/page';
import Product from './product/page';
import Privacy from './privacy/page';
import Contact from './contact/page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Menu />
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer>
        <div className="footer-container">
          <p>&copy; 2024 Trophē. All rights reserved.</p>
          <div className="footer-link">
            <Link to={"/team"}>Team</Link>
            <Link to={"/privacy"}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);
