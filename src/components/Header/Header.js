import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/todos">
      <img
        alt="MyToDo"
        width="50px"
        height="50px"
        src="../../assets/icons/icons8-todo-list-50.png"
      />
    </Link>
    <h1>MyToDo</h1>
    <h3>qw</h3>
  </header>
);

export default Header;
