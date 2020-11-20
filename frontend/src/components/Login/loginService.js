import axios from 'axios'

const API = 'http://192.168.0.12:4000'

export const login = async (user) =>{
    return await axios.post(`${API}/api/authorization/signin`,user)
}