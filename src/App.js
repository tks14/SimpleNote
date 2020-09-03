import React from 'react';
import './App.css';
import Layout from './Layout/Layout'
import Registration from './Auth/Registration'
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = {"/"} component = {Layout} />
          <Route exact path = {"/auth"} component = {Registration} />

        </Switch>
      </BrowserRouter>
    </div>
    //<Layout/>

  );
}



export default App;
