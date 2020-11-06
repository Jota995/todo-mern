import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import * as registerService from './registerService'

const Register = () => {

  const history = useHistory()

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await registerService.createUser(user);
    if(response.status === 200){
      console.log(response.data)
      history.push('/login');
    }else{
      alert('something wrong')
    }
  }

  return (
    <form className="card w-50 mx-auto" onSubmit={handleSubmit}>
      <div className="card-header text-center">Signup</div>
      <div className="card-body">
        <div className="form-group">
          <label>User</label>
          <input type="text" name="username" onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleInputChange} className="form-control" required />
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
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
