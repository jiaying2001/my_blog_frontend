import request from "@/utils/request"

export default {
    get(url, config={}){
        return request({
            method: "get",
            url: url,
            params: config
        });
    }
}