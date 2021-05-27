import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
// import PrivateRoute from './components/PrivateRoute';
import ManageClasses from './components/ManageClasses';
import EditClass from './components/EditClass';

import Home from './components/HomePage'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignUpSuccess from './components/SignUpSuccess';
// import InstructorPage from './components/InstructorPage';
import CreateClassForm from './components/CreateClassForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <a href="#sign-in-h2">Sign in</a>
          <a href="#sign-up-h2">Sign up</a>
          <Link to="/classes">Manage Classes</Link>
        </nav>
      </header>
      <Switch>

        <Route exact path='/'>
          <Home SignIn={SignIn} SignUp={SignUp}/>
        </Route>

        <Route exact path='/classes/create'>
            <CreateClassForm />
        </Route>

        <Route exact path='/classes/:id'>
          <EditClass />
        </Route>

        <Route exact path='/classes'>
          <ManageClasses />
        </Route>

        <Route path="/signup" exact>
          <SignUp />
        </Route>

        <Route path="/signupsuccess" exact>
          <SignUpSuccess/>
        </Route>

        <Route path="/signin" exact>
            <SignIn />
        </Route>

        {/* <Route path="/instructorpage" exact>
            <InstructorPage />
        </Route> */}

      </Switch>
    </div>
  );
}

export default App;