import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
          <div className="navbar-brand">
              <i className="fas fa-home" />
          </div>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button className="btn">
            <span className="align-content-center">
              <i className="fas fa-cart-plus align-content-center"/>  
            </span>
            <span className="ml-2 align-content-center">
              Shopping Cart
            </span>
          </button>
        </Link>
      </nav>
    )
  }
}