import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { Auth0Provider } from "@auth0/auth0-react";

const CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
      domain="admindash.us.auth0.com"
      clientId={CLIENT_ID}
      redirectUri="http://localhost:3000/admin/profile"
    >
        <App />
    </Auth0Provider> 
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
