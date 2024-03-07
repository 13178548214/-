import httpInstance from "@/utils/http";
export function GetDetailAPI(id) {
    return httpInstance({
        url:'/goods',
        params:{
            id
        }
    })
}