import axios from 'axios'

const API = 'http://192.168.0.12:4000'

export const createUser = async (user) =>{
    return await axios.post(`${API}/api/users/`,user)
}