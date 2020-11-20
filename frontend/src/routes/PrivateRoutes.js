import React from 'react'
import { PrivateRoute } from './helperRoutes'

import Todo from '../components/todo/Todo'
import Profile from '../components/user_profile/profile'

const PrivateRoutes = () =>{
    return(<>
        <PrivateRoute exact path="/todos" component={Todo}/>
        <PrivateRoute exact path="/profile" component={Profile}/>
    </>)
}

export default PrivateRoutes