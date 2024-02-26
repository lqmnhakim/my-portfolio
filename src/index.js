import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Container/1-home/homepage';
// import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HomePage />
  </React.StrictMode>
);

