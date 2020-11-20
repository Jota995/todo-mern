import axios from 'axios'

const API = 'http://192.168.0.12:4000'

export const getTasks = async (token) =>{
    return await axios.get(`${API}/api/todos/`,{
        headers:{
            "x-access-token" : token
        }
    })
}

export const createTask = async (todo,token) =>{
    return await axios.post(`${API}/api/todos/`,todo,{
        headers:{
            "x-access-token" : token
        }
    })
}

export const updateTask = async (todo,token) =>{
    return await axios.put(`${API}/api/todos/${todo._id}`,todo,{
        headers:{
            "x-access-token" : token
        }
    })
}

export const toggleComplete = async (id, isComplete,token) =>{
    return await axios.put(`${API}/api/todos/${id}/toggleComplete`,isComplete,{
        headers:{
            "x-access-token" : token
        }
    })
}

export const deleteTask = async (id,token)=>{
    return await axios.delete(`${API}/api/todos/${id}`,{
        headers:{
            "x-access-token" : token
        }
    })
}
