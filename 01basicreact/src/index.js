import React from 'react'; // core foundational library used for taking refernces
import ReactDOM from 'react-dom/client'; // implementation of react for the web

// this two Library is used for the manupulation of the react dom
import App from './App';

//parallel dom with the just like browerse dom
// react dom is used to render the react component in the browser

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
  
);

// yek fun lo usmein html return karo aur index.js use render krwa dega