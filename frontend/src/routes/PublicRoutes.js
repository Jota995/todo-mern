import React from "react";

import Home from "../components/home/index";
import About from "../components/about/about";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

import {PublicRoute} from './helperRoutes'

const PublicRoutes = () => {
  return (
    <>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/about" component={About} />
      <PublicRoute exact path="/register" component={Register} />
      <PublicRoute exact path="/login" component={Login} />
    </>
  );
};

export default PublicRoutes;
