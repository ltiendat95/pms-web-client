// @flow
/* eslint no-process-env:0 */
import React                        from 'react';
import {
  Route,
  Switch
}                                   from 'react-router-dom';
import PrivateRoute                 from '../components/privateRoute/PrivateRoute';
import HomeConnected                from '../views/home';
import SimpleTablesConnected        from '../views/simpleTables';
import ProtectedConnected           from '../views/protected';


export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeConnected} />
    <Route exact path="/simpleTables" component={SimpleTablesConnected} />
    {/* private views: need user to be authenticated */}
    <PrivateRoute path="/protected" component={ProtectedConnected} />

  </Switch>
);

export default MainRoutes;
