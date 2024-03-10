import { defineStore } from "pinia";
import { getUserAPI } from '@/apis/user';
import {ref} from 'vue'
import {mergeCartAPI} from '@/apis/cart'
import {getCartStore} from '@/stores/cart'
export const useUserStore =defineStore( 'user',()=>{
  const cartStore = getCartStore()
    const userInfo = ref({})
    const getUserInfo = async({account,password})=>{
    const res =   await getUserAPI({account,password})
      userInfo.value = res.result
    await  mergeCartAPI(cartStore.cartList.map(item=>{
        return{
          skuId:item.skuId,
          selected:item.selected,
          count:item.count,
        }
      }))
    cartStore.updatedList()
    }
    const clearInfo = () =>{
        userInfo.value = {}
    }
    return {
        userInfo,
        getUserInfo,
        clearInfo
    }
},

{
    persist: true,
  }
) 
   
