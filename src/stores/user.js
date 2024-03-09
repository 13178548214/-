import { defineStore } from "pinia";
import { getUserAPI } from '@/apis/user';
import {ref} from 'vue'
export const useUserStore =defineStore( 'user',()=>{
    const userInfo = ref({})
    const getUserInfo = async({account,password})=>{
    const res =   await getUserAPI({account,password})
      userInfo.value = res.result
    }
    return {
        userInfo,
        getUserInfo
    }
},
{
    persist: true,
  }
) 
   
