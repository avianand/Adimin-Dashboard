import React from "react";
import { useHistory } from "react-router";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const config = getConfig();

  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
