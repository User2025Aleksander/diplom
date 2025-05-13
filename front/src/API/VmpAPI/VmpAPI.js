import { instance } from "../AxiosConfig"
export const VmpAPI = {
    getVmpData() {
        return instance.get(`api/vmp`)
    },   
}