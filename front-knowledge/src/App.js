import React, { Fragment } from "react";
import { Route } from "react-router-dom";
// import Navbar2 from "./components/layout/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Addknow from "./Components/Knowledge/Addknow";
//Redux
import { Provider } from "react-redux";
import store from "./Components/redux/store";
import editknow from "./Components/Knowledge/editknow";
const App = () => (
  <Provider store={store}>
    <Fragment>
      {/* <Navbar2/> */}
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/addknow" component={Addknow} />
      <PrivateRoute path="/edit-knowledge/:id" component={editknow} />
      <PrivateRoute path="/apply/:id" component={Home} />
    </Fragment>
  </Provider>
);

export default App;
