import { instance } from "../AxiosConfig"
export const OmsAPI = {
    getOmsData() {
        return instance.get(`api/oms`)
    },   
}