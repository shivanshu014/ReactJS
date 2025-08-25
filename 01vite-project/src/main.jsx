import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// // StrictMode is a tool for highlighting potential problems in an application
// // It activates additional checks and warnings for its descendants.
// // It does not render any visible UI.
// // It is a development tool only and does not impact the production build.
// // It helps to find the potential problems in the application
