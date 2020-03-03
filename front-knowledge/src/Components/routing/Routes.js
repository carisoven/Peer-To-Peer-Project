import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "../Home/Home";
import PrivateRoute from "./PrivateRoute";
import Addknow from "../Knowledge/Addknow";
import editknow from "../Knowledge/editknow";
import Delknow from "../Knowledge/delknow";
import Knowledge from "../Knowledge/Knowledge";
import { Myknowledge } from "../Home/Myknowledge";
import Resever from "../resever/Resever";
import Sender from "../Sender/Sender";
import NotFound from '../other/NotFound'
const Routes = () => {
  return (
    <section>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/addknow" component={Addknow} />
        <PrivateRoute path="/edit-knowledge/:id" component={editknow} />
        <PrivateRoute path="/del-knowledge/:id" component={Delknow} />
        <PrivateRoute path="/knowledge/:id" component={Knowledge} />
        <PrivateRoute path="/myknowledge" component={Myknowledge} />
        <PrivateRoute path="/knowledgeresev/:id" component={Resever} />
        <PrivateRoute path="/knowledgeSend/:id" component={Sender}/>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
