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

export const deleteCartList = (xid)=>{
    console.log(1);
    return httpInstance({
        url:'/member/cart',
        method:'DELETE',
        data:{
            xid
        }
    }
)
}