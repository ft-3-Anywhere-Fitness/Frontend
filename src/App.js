import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </nav>
      </header>

      <Route path="/" exact render={props => {
        return (
          <div>Home page stuff</div>
        );
      }}>
      </Route>

      <Route path="/signup" exact render={props => {
        return (
          <SignUp />
        );
      }}>
      </Route>

      <Route path="/signin" exact render={props => {
        return (
          <SignIn />
        );
      }}>
      </Route>
    </div>
  );
}

export default App;
