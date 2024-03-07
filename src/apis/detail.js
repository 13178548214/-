import httpInstance from "@/utils/http";
export function GetDetailAPI(id) {
    return httpInstance({
        url:'/goods',
        params:{
            id
        }
    })
}

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return httpInstance({
      url:'/goods/hot',
      params:{
        id, 
        type, 
        limit
      }
    })
  }