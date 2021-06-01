import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./containers/admin";
import Customer from "./containers/customer";
import AdminRoute from "./utils/customRoutes/adminRoutes";
import Auth0ProviderWithHistory from "./utils/auth0-provider-with-history";

function App({ history }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Switch>
            <AdminRoute path="/admin" component={Admin} />
            <Route path="/">
              <Customer />
            </Route>
          </Switch>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
}

export default App;
