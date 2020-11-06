import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form className="card w-50 mx-auto">
      <div className="card-header text-center">Signin</div>
      <div className="card-body">
        <div className="form-group">
          <label>User</label>
          <input type="text" onChange={handleInputChange} name="user" className="form-control" required />
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
