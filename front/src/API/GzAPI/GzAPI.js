import { instance } from "../AxiosConfig"
export const GzAPI = {
    getGzData() {
        return instance.get(`api/gz`)
    },   
}