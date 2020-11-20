import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component, ...options}) => {
    const authorization = localStorage.getItem('authorization')
    if(authorization) return <Route {...options} component={component}/>

    return <Redirect to='/'/>
}

export default PrivateRoute