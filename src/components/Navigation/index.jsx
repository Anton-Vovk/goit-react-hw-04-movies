import React from 'react';
import { NavLink } from 'react-router-dom';
import { navList, link, active } from '../Navigation/Navigation.module.css';

const Nav = () => (
  <ul className={navList}>
    <li>
      <NavLink to="/" exact className={link} activeClassName={active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" className={link} activeClassName={active}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
