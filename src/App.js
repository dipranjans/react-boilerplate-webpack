import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./component/Home";
import States from "./component/States";
import Symptoms from "./component/Symptoms";
import Prevention from "./component/Prevention";
import Faq from "./component/Faq";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <nav className="lighten-0" role="navigation">
            <div className="nav-wrapper container">
              <NavLink to="/" className="brand-logo">
                Covid19 alert
              </NavLink>

              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/" exact activeClassName="activeCls">
                    Cases (India)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/states" exact activeClassName="activeCls">
                    Cases (States)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/symptoms" exact activeClassName="activeCls">
                    Symptoms
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/prevention" exact activeClassName="activeCls">
                    Prevention
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" exact activeClassName="activeCls">
                    FAQ
                  </NavLink>
                </li>
              </ul>
              <ul id="nav-mobile" className="sidenav">
                <li>
                  <NavLink to="/" exact activeClassName="activeCls">
                    Cases (India)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/states" exact activeClassName="activeCls">
                    Cases (States)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/symptoms" exact activeClassName="activeCls">
                    Symptoms
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/prevention" exact activeClassName="activeCls">
                    Prevention
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" exact activeClassName="activeCls">
                    FAQ
                  </NavLink>
                </li>
              </ul>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
            </div>
          </nav>
          <Switch>
            <Route exact path="/Prevention">
              <Prevention />
            </Route>
            <Route exact path="/symptoms">
              <Symptoms />
            </Route>
            <Route exact path="/states">
              <States />
            </Route>
            <Route exact path="/faq">
              <Faq />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Covid19 alert</h5>
                <p className="grey-text text-lighten-4">
                  Coronavirus disease (COVID-19) is an infectious disease caused
                  by a newly discovered coronavirus.{" "}
                </p>
                <p>
                  Most people infected with the COVID-19 virus will experience
                  mild to moderate respiratory illness and recover without
                  requiring special treatment. Older people, and those with
                  underlying medical problems like cardiovascular disease,
                  diabetes, chronic respiratory disease, and cancer are more
                  likely to develop serious illness.
                </p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Symptoms</h5>
                <ul className="symptoms__cls">
                  <li>
                    <a
                      className="white-text"
                      href="https://www.who.int/"
                      target="_blank"
                    >
                      Cough
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.who.int/"
                      target="_blank"
                    >
                      fever
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.who.int/"
                      target="_blank"
                    >
                      tiredness
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.who.int/"
                      target="_blank"
                    >
                      difficulty breathing (severe cases)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Prevention</h5>
                <ul className="prevention__cls">
                  <li>
                    <a
                      className="white-text"
                      href="https://www.mohfw.gov.in/"
                      target="_blank"
                    >
                      HANDS Wash them often
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.mohfw.gov.in/"
                      target="_blank"
                    >
                      ELBOW Cough into it
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.mohfw.gov.in/"
                      target="_blank"
                    >
                      FACE Don't touch it
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.mohfw.gov.in/"
                      target="_blank"
                    >
                      SPACE Keep safe distance
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.mohfw.gov.in/"
                      target="_blank"
                    >
                      HOME Stay
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">Made by Dip</div>
          </div>
        </footer>
      </>
    );
  }
}

// function States() {
//   return <h2>States</h2>;
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
