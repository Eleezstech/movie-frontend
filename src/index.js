import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss'
import './toast.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
