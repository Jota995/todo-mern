import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify'

import * as loginService from "./loginService";

const Login = ({setUsername}) => {

  const history = useHistory()

  const login = async (user) => {
    try {
      const response = await loginService.login(user);
      const authorization = {
        token: response.data.token,
        username: response.data.username,
      };
      localStorage.setItem("authorization", JSON.stringify(authorization));
      setUsername(response.data.username)
      toast.success("Loggin successfully");
      return history.push('/todos')
    } catch (error) {
      console.log(error)
      return toast.error('user or password not found')
    }
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) =>{
    e.preventDefault()
    login(user)
  }

  return (
    <form className="card w-50 mx-auto" onSubmit={handleSubmit}>
      <div className="card-header text-center"><h4>Login</h4></div>
      <div className="card-body">
        <div className="form-group">
          <label>Email</label>
          <input type="email" onChange={handleInputChange} name="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
