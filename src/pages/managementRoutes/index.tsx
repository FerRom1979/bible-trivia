import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Welcome } from '../../components';

const ManagementRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default ManagementRoutes;
