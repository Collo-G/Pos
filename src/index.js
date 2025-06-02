import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

// PayPal Client ID (you can replace this with your actual sandbox client ID)
const initialOptions = {
  'client-id': 'YOUR_PAYPAL_CLIENT_ID',  // Replace with your sandbox client ID
  currency: 'USD',  // You can change the currency if needed
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap App with PayPalScriptProvider
root.render(
  <PayPalScriptProvider options={initialOptions}>
    <App />
  </PayPalScriptProvider>
);
