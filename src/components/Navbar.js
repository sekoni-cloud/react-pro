import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import shop from '../shopping.png';
import '../App.css';
export default function Navbar() {
        return(
           <nav id="nav-wrapper" className="navbar navbar-expand-sm  navbar-dark px-sm nav-wrapper">
            {/*
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */
            }
            <Link to="/">
              <img src={logo} alt="store" className="navbar-brand"/>
            </Link>
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5 nav-link1">
                      <Link to="/"  className="nav-link">
                        products
                      </Link>
                  </li>
              </ul>
              <Link to="/cart" className="ml-auto">
                  <button className="button-container">
                  <img height="45" width="45" src={shop} alt="store" className="navbar-brand"/>
                 my cart
                  </button>
              </Link>
           </nav>
        );
}