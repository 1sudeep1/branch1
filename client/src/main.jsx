import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './Component/ScrollToTop.jsx';
import { Toaster } from 'react-hot-toast';
import ReduxProvider from './redux/provider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider>
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <Toaster />
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </ReduxProvider>
)
