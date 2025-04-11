import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // sovelluksen pääosan tuonti


const root = ReactDOM.createRoot(document.getElementById('root')); //etsii HTML elementin, id root (tiedostossa public/index.html)
root.render( //renderöi App-komponentin Reactin StrictModessa
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

