import httpInstance from "@/utils/http";

export const getPayAPI=(id)=>{
    return httpInstance({
        url:`/member/order/${id}`
    })
}

export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }