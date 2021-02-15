import { React, useState } from 'react';
import Auth from "../routes/Auth";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../routes/Home';

const AppRouter = ({isLoggedIn}) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ?  
        (<>
          <Route exact path="/">
            <Home/>
          </Route>
        </>)
        :
        (
          <Route exact path="/">
            <Auth/>
          </Route>
        )
        }
      </Switch>
    </Router>
  );
}

export default AppRouter;