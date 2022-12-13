import "./App.css";
import Home from "./components/Home";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Popular from "./components/Popular";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <h1>- - - - -Flicks & Reels- - - - -</h1>
          <h5>a site for movie connoisseur</h5>
          <Home />
        </div>
      </Route>
      <Route path="/Popular">
        <Popular />
      </Route>
      <Route path="/Display">
          <Display />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
