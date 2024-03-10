import httpInstance from "@/utils/http";

export const insertCartAPI = ({count,skuId}) =>{
    return httpInstance({
        url:'/member/cart',
        method:'POST',
        data:{
            count,
            skuId
        }
    })
}

export const getCartListAPI = ()=>{
    return httpInstance({
        url:'/member/cart'
    })
}

export const deleteCartList = (ids)=>{
    return httpInstance({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    }
)
}

export const mergeCartAPI = (data)=>{
    return httpInstance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}