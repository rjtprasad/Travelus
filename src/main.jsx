import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import conf from "./config/env_config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={conf.AUTH0_DOMAIN}
    clientId={conf.AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
