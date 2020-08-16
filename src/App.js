import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CheckOut from "./CheckOut";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>

          <Route path="/login">
            <h1>Login</h1>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
