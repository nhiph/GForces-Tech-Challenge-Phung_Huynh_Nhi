import axios from "axios";

export class BaseService {
    get = (url) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
        });
        return promise;
    }
}

export const baseService = new BaseService()