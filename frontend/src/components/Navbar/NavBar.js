import React  from "react";
import { Link, useHistory } from "react-router-dom";
import {toast} from 'react-toastify'

const NavBar = ({setUsername, username}) => {

  const history = useHistory()

  const logout = () =>{
    localStorage.removeItem('authorization')
    toast.success('user logout successfully')
    setUsername('')
    history.push('/')
  }

  const loginLink = (
    <li className="nav-item">
      <Link className="nav-link" to="/login">
        Login
      </Link>
    </li>
  );

  const registerLink = (
    <li className="nav-item">
      <Link className="nav-link" to="/register">
        Register
      </Link>
    </li>
  );

  const userLink = (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to="#"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {username}
      </Link>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to="/profile">
          Profile
        </Link>
        <Link className="dropdown-item" to="/todos">
          Tasks
        </Link>
        <Link className="dropdown-item" onClick={logout} to="#">
          Logout
        </Link>
      </div>
    </li>
  );

  const isLogged = (user) => {
    if (user) {
      return userLink;
    }
    return (
      <React.Fragment>
        {registerLink} 
        {loginLink}
      </React.Fragment>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TODO APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {isLogged(username)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
