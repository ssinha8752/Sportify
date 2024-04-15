import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScrolltoTop } from './components/Other/ScrolltoTop';
import { FilterProvider } from './context/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
    <ScrolltoTop/>
    <App />
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
