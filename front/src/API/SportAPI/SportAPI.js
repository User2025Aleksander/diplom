import { instance } from "../AxiosConfig"
export const SportAPI = {
    getSportData() {
        return instance.get(`api/sport`)
    },   
}