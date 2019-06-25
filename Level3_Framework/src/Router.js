import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from './Menu';
import Contact from './Contact';
import Grid from './Grid';
import About from "./About";


function AppRouter() {
  function closeMenu() {
    document.getElementById('burger').checked = false;
  }
  return (
    <Router basename={window.location.pathname}>
      <header className="header">
            <Grid />
            <input type="checkbox" id="burger" className="header_burger" />
            <label htmlFor="burger" className="header_burger__button">
                <span className="header_burger__button-span top"></span>
                <span className="header_burger__button-span middle"></span>
                <span className="header_burger__button-span bottom"></span>
            </label>
            <nav className="header_nav">
                <Link to="/" className="header_nav__link" onClick={closeMenu}>Menu</Link>
                <a href="#catering" className="header_nav__link" onClick={closeMenu}>Catering</a>
                <Link to="/about/" className="header_nav__link" onClick={closeMenu}>About Us</Link>
                <Link to="/contact/" className="header_nav__link" onClick={closeMenu}>Contact</Link>
            </nav>
        </header>

        <main className="main">
          <Route path="/" exact component={Menu} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </main>
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <p className="footer_wrapper_copy">&copy;&nbsp;2016 Dirty Dogs all rights reserved</p>
                    <ul className="footer_wrapper__list">
                        <li className="footer_wrapper__list-item">
                            <a className="footer_wrapper__list-item--link" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fxKHxJsKBaM1Rwtq7">274 Marconi Blvd. Columbus, Ohio 43215</a></li>
                        <li className="footer_wrapper__list-item">614.538.0095</li>
                        <li className="footer_wrapper__list-item">
                          <Link to="/contact/" className="footer_wrapper__list-item--link" onClick={closeMenu}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </Router>
  );
}

export {
  AppRouter,
  Contact,
};