import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './Components/Redux/Store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-48vowqt1azcgd0q5.us.auth0.com"
    clientId="bS1xi0RPmQg698a9Yye4ziJkPxgeULcY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <BrowserRouter>
      <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
)
