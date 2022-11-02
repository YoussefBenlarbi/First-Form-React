import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Form from './formButton'
// import ComposentEvent from './ComposentEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <ComposentEvent /> */}

    <Form />
  </React.StrictMode>
);