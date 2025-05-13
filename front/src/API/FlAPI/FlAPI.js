import { instance } from "../AxiosConfig"
export const FlAPI = {
    getFlData() {
        return instance.get(`api/fl`)
    },   
}