import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/Context';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <BrowserRouter>
      <ContextProvider>
         <App />
      </ContextProvider>
   </BrowserRouter>
);

reportWebVitals();
