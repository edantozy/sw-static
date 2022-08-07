import axios from 'axios'

const swAPI = axios.create({
    baseURL: 'https://swapi.dev/api'
})

export default swAPI