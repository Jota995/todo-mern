import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Todo from './components/todo/Todo'
import NavBar from './components/Navbar/NavBar'
import About from './components/about/about'
import Login from './components/Login/Login' 
import Register from './components/Register/Register'

function App() {

  const [ user, setUser] = useState('')

  return (
    <div className="App">
      <Router>
        <NavBar user ={user}/>
        <Switch>
          <div className="container p-3">
            <Route path="/" component={Todo} exact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
