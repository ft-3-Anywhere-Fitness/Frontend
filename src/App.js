import './App.css';
import { Link, Route, useHistory } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignUpSuccess from './components/SignUpSuccess';
import InstructorPage from './components/InstructorPage';
import CreateClassForm from './components/CreateClassForm';

function App() {
  const history = useHistory();

  const signUpSubmit = newUser =>
  {
    // user registration stuff goes here

    // for now, I'm just gonna log it and redirect
    console.log(newUser);
    history.push('/signupsuccess');
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/instructorpage">Temporary Instructor Page</Link>
        </nav>
      </header>

      <Route path="/" exact>
          <div>Home page stuff</div>
      </Route>

      <Route path="/signup" exact>
        <SignUp submitForm={signUpSubmit}/>
      </Route>

      <Route path="/signupsuccess" exact>
        <SignUpSuccess/>
      </Route>

      <Route path="/signin" exact>
          <SignIn />
      </Route>

      <Route path="/instructorpage" exact>
          <InstructorPage />
      </Route>

      <Route path="/createclass" exact>
          <CreateClassForm />
      </Route>
    </div>
  );
}

export default App;