import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-km6cq30d03zpknhe.us.auth0.com"
    clientId="W2z7frfDqdi2GgtpnQMx2UFPLyQhRRaZ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
);