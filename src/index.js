import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import { Provider } from 'react-redux'
import productStore from './productStore.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={productStore}>
      <App/>
    </Provider>
  </React.StrictMode>
);

