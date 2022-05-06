import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoApp from '../../images/LogoApp.svg';
import Profile from '../../images/Profile.png';
import cart from '../../images/cart.png';

import ProfDown from '../dropdown/ProfDown';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { UserContext } from '../../context/userContext';

export default function Navbar() {
  const [state, dispatch] = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(false);

  //Navbar
  let navbar = '';
  if (state.isLogin) {
    navbar = (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center ">
        <li className="nav-item ">
          <Link to="/cart" className="nav-link">
            <img
              src={cart}
              alt=""
              style={{ width: '3rem', height: '3rem' }}
              className="ms-1 me-lg-4"
            />
          </Link>
        </li>
        <li className="nav-item dropdown ">
          <div
            className="bg-dark rounded-circle overflow-hidden"
            style={{ width: '4rem', height: '4rem' }}
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={Profile} alt="" className="img-fluid" />
          </div>
          <ProfDown />
        </li>
      </ul>
    );
  } else {
    navbar = (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center ">
        <li className="nav-item ">
          <Login />
        </li>
        <li className="nav-item  ">
          <Register />
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container py-lg-4 ">
        <Link className="navbar-brand" to="#">
          <img src={LogoApp} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarTogglerDemo02">
          {navbar}
        </div>
      </div>
    </nav>
  );
}
