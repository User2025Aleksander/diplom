import { instance } from "../AxiosConfig"
export const SvodAPI = {
    getSvodData() {
        return instance.get(`api`)
    },   
}