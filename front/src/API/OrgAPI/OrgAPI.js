import { instance } from "../AxiosConfig"
export const OrgAPI = {
    getOrgData() {
        return instance.get(`api/org`)
    },   
}