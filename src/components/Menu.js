import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const menu = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'History',
    to: '/history',
    exact: false
  },
  {
    name: 'Cart Product',
    to: '/products',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to} >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
}

class Menu extends Component {
  render() {
    return (
       <div className="navbar navbar-default">
        <div className="navbar-brand">NEWS</div>
        <ul className="nav navbar-nav">
          {this.showMenu(menu)}
        </ul>
      </div>
    );
  }
  showMenu = (menu) => {
    var result = null;
    if (menu.length > 0) {
      result = menu.map((item, index) => {
        return (
          <MenuLink
            key={index}
            label={item.name}
            to={item.to}
            activeOnlyWhenExact={item.exact}
          />
        );
      })
    }
    return result
  }
}

export default Menu;
