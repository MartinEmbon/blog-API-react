import React from "react"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Navbar from "./Navbar"
import Home from './Home';
import About from "./About"
import Create from "./Create"
import BlogDetails from "./BlogDetails";
import NotFound  from "./NotFound";

const App = () => {
  
  return (
    <Router>
    <div className="app">
      <Navbar />      
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

//npx json-server --watch data/db.json --port 8000