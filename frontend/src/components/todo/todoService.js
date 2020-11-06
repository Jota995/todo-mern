import axios from 'axios'

const API = 'http://192.168.0.12:4000'

export const getTasks = async (userId) =>{
    return await axios.get(`${API}/api/todos/${userId}`)
}

export const createTask = async (todo) =>{
    return await axios.post(`${API}/api/todos/`,todo)
}

export const updateTask = async (todo) =>{
    return await axios.put(`${API}/api/todos/${todo._id}`,todo)
}

export const toggleComplete = async (id, isComplete) =>{
    return await axios.put(`${API}/api/todos/toggleComplete/${id}`,isComplete)
}

export const deleteTask = async (userId,id)=>{
    return await axios.delete(`${API}/api/todos/${userId}/${id}`)
}
