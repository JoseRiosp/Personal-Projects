
import React from 'react';
import ReactDOM from 'react-dom/client';
//Añadimos bootstrap, arriba de css para que no lo pise
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
//Importante: Los estilos propios deben it debajo del boostrap
import './index.css';
import './App.css';
//import App from './App';

import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutingOne/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
