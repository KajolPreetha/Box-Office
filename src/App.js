import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Starred from "./pages/Starred";


function App() {
  return (
    <div>
      <Nav />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <h1>ERROR 404</h1>
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
