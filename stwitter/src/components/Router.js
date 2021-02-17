import { React, useState } from "react";
import Auth from "../routes/Auth";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";
import { Redirect } from "react-router-dom";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile refreshUser={refreshUser} userObj={userObj} />
            </Route>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/profile">
              <Auth />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
