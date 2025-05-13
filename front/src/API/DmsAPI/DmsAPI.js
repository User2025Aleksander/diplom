import { instance } from "../AxiosConfig"
export const DmsAPI = {
    getDmsData() {
        return instance.get(`api/dms`)
    },
}