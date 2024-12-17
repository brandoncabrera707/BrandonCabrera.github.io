import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import Home from "./pages/home"
import Experience from "./pages/experience"
import Project from "./pages/project"


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/experience">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);