import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    return (
        <Router>
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink exact to="/" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                            <NavLink to="/dashboard" className="nav-link">
                                Dashboard
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <ul>
                    <li>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul> */}

                <hr />

                {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
