import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import"./style.css";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;
