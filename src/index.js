import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Container/1-home/homepage';
// import App from './App';
import './index.css';
import AboutMe from './Container/2-about-me/about-me';
import PrevProjects from './Container/3-prev-project/projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomePage /> */}
    <PrevProjects />
  </React.StrictMode>
);

