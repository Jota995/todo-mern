import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/Navbar/NavBar";

import Home from "./components/home/index";
import About from "./components/about/about";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Todo from "./components/todo/Todo";
import Profile from "./components/user_profile/profile";

import PrivateRoute from "./routes/helperRoutes";

function App() {

  const [username,setUsername] = useState(localStorage.getItem('authorization') ? JSON.parse(localStorage.getItem('authorization')).username : '')

  return (
    <div className="App">
      <Router>
        <NavBar setUsername={setUsername} username={username}/>
        <Switch>
          <div className="container p-3">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={()=> <Login setUsername={setUsername}/>} />
            <PrivateRoute exact path="/todos" component={Todo} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </div>
        </Switch>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
