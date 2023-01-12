import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);