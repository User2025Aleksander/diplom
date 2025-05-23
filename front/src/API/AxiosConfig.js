import axios from 'axios'
import configServer from './server.config.json' 

export const instance = axios.create({
    baseURL: configServer.serviceURL,
    headers: {
        "Content-Type": "application/json",
    }
})