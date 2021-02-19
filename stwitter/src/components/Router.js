import { React, useState } from "react";
import Auth from "../routes/Auth";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";
import { Redirect } from "react-router-dom";


const AppRouter = ({ userObj, refreshUser }) => {
  return (
    <Router>
      {userObj && <Navigation userObj={userObj} />}
      <Switch>
        {userObj ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile refreshUser={refreshUser} userObj={userObj} />
            </Route>
          </>
        ) : (
          <>
            <Auth />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
