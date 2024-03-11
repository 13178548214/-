import httpInstance from "@/utils/http";

export const getCheckoutAPI=()=>{
  return httpInstance({
    url:'/member/order/pre'
  })
}

export const creatOrderAPI=(data)=>{
  return httpInstance({
    url:'/member/order',
    method:'POST',
    data
  })
}