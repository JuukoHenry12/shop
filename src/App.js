import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import BlogDetails from './components/BlogDetails'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
