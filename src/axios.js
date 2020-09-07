import axios from 'axios'

const instance  = axios.create({
    baseURL: 'https://postit-server.firebaseio.com/'
})

export default instance;