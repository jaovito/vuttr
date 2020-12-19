import axios from 'axios'

//setando a url base para desenvolvimento.
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api