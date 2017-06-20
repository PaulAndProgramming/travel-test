import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import TravelApp from 'components/TravelApp.jsx';

class AppRouter extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={TravelApp}/>
          <Route render={() => <Redirect to="/" />}/>
        </Switch>
      </Router>
    );
  }
};

export default AppRouter;
