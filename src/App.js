import './styles/app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';

// path = "/about"

function App() {
  return (
    <div className="app">

      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
