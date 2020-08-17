import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CheckOut from "./CheckOut";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //this part act as my listner for my sign in and signout methof of firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is already loged in.set user in our datalayer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any clean up code goes here
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>

          <Route path="/login">
            <Login />
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
