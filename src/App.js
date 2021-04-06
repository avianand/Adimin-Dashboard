import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./containers/admin";
import Customer from "./containers/customer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Customer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
