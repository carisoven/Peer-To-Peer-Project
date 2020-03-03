import React, { Fragment,useEffect } from "react";
import { Switch,Route } from "react-router-dom";
import Login from './Components/Auth/Login'
//Redux
import { Provider } from "react-redux";
import store from "./Components/redux/store";
import {loadUser} from './Components/redux/action/auth';
import setAuthToken from './Components/redux/utils/setAuthToken';
import Routes from './Components/routing/Routes'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
  <Provider store={store}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
  </Provider>
)
}

export default App;