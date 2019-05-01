import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/main.css';

import Home from "./Home";
import About from "./About";
import People from "./People";
import Programs from './Programs';
import Corporate from './Corporate';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return (
        <HashRouter>
          <div>
            <div className="header">
            <Navbar className="fullWidth" collapseOnSelect expand="lg">
              <Navbar.Brand href="#/">
                <img
                  src="images/ceo_logo.png"
                  width="100"
                  height="60"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#/">HOME</Nav.Link>
                  <Nav.Link href="#/about">ABOUT</Nav.Link>
                  <NavDropdown title="PEOPLE" id="collasible-nav-dropdown">
                    <NavDropdown.Item>EXECUTIVE TEAM</NavDropdown.Item>
                    <NavDropdown.Item>GUESTS &#38; SPEAKERS</NavDropdown.Item>
                    <NavDropdown.Item>COMMUNITY</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="PROGRAMS" id="collasible-nav-dropdown">
                    <NavDropdown.Item>SPEAKER SERIES</NavDropdown.Item>
                    <NavDropdown.Item>INNOVATION MIXER</NavDropdown.Item>
                    <NavDropdown.Item>SMALL GROUP DINNER</NavDropdown.Item>
                    <NavDropdown.Item>FRIDAY HAPPY HOUR</NavDropdown.Item>
                    <NavDropdown.Item>CHINA STARTUP TREK</NavDropdown.Item>
                    <NavDropdown.Item>PITCH NIGHT</NavDropdown.Item>
                    <NavDropdown.Item>FUTURE @ CEO</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="CORPORATE" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">SPONSORS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">INTEREST FORM</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="justify-content-end">
                  {
                    this.state.isLoggedIn? (
                      <Nav.Link className="myAccount">MY ACCOUNT</Nav.Link>
                    ) : (
                      <Nav.Link className="login">LOGIN</Nav.Link>
                      <Nav.Link className="register" href="#/register">REGISTER</Nav.Link>
                    )
                  }
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/people" component={People}/>
              <Route path="/programs" component={Programs}/>
              <Route path="/corporate" component={Corporate}/>
              <Route path="/register" component={Register}/>              
            </div>
            <Footer />
          </div>
        </HashRouter>
    );
  }
}

export default Main;


