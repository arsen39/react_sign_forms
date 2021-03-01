import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { PATHS } from "./common/constants";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className='appWrapper'>
      <Router>
        <Switch>
          <Route path={PATHS.signIn} children={<SignIn/>} />
          <Route path={PATHS.signUp} children={<SignUp/>}/>
          <Route path={PATHS.home} children={<Home/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
