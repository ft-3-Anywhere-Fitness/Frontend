import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import ManageClasses from './components/ManageClasses';
import EditClass from './components/EditClass';

function App() {
  return (
    <div className="App">
      <h1>Anywhere Fitness</h1>
      <Switch>
        <Route exact path='/classes/:id'>
          <EditClass />
        </Route>
        <Route path='/classes'>
          <ManageClasses />
        </Route>
        <Route path='/'>
          <h2>Home</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
