import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Drawer from "./Drawer";

//Context for other layout elements
export default () => {
  const [auth, setAuth] = useState(true);
  const [state, setState] = React.useState({
    left: false,
  });

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
    <div>
      <Header auth={auth} toggleDrawer={toggleDrawer} />

      <Drawer status={state.left} open={state} toggleDrawer={toggleDrawer} />

      <Content />

      <div id="footer" />
    </div>
  );
};
