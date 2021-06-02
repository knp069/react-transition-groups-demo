import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Cover from "./components/Cover";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [animate, setAnimate] = useState(true);
  return (
    <div className="App">
      <Navigation />
      <div className="main__container">
        <TransitionGroup>
          <CSSTransition
            in={animate}
            timeout={1000}
            classNames="block"
            key={location.key}
            unmountOnExit
          >
            <Switch>
              <Route exact path="/">
                <Cover />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/contact-me">
                <Contact />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
