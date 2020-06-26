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

//Context for other layout elements
export default () => {
  const [auth, setAuth] = useState(true);
  const [state, setState] = React.useState({
    left: false,
  });

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header auth={auth} toggleDrawer={toggleDrawer} />
          <Drawer
            status={state.left}
            open={state}
            toggleDrawer={toggleDrawer}
          />
          <Switch>
            <Route exact path="/" component={Content} />
          </Switch>
          <div id="footer" />
        </Router>
      </Provider>
    </>
  );
};
