import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/auth";
import Header from "./components/layout/Header";
import Content from "./components/Content";
import Drawer from "./components/layout/Drawer";
import Routes from "./components/routing/Routes";

export default () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header auth={auth} />
          <Drawer />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route component={Routes} />
          </Switch>
          <div id="footer" />
        </Router>
      </Provider>
    </>
  );
};
