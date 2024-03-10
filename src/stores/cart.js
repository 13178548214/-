import { defineStore } from "pinia";
import {computed, ref} from 'vue'
export const getCartStore = defineStore('cart',()=>{
    //定义一个购物清单
    const cartList = ref([])
    //添加物品
    const cartAdd = (goods) =>{
    const item =  cartList.value.find((item) => goods.skuId === item.skuId)
    /* item即cartList的一个元素 */
    /* item的 skuId 与传入的 goods 参数的 skuId 相同。如果没有找到匹配的元素，则 item 的值为 undefined */
    if(item){
        item.count +=  goods.count
    }else{
        cartList.value.push(goods)
    }
    }
    const cartdelate = (id) =>{
       /* const xid =  cartList.value.findIndex((item)=>item.skuId === id)  //findIndex返回索引
       cartList.value.splice(xid,1) */
       cartList.value = cartList.value.filter((item)=>item.skuId !== id)
    }
    const cartChange = (id,selected)=>{
        const item = cartList.value.find((item) => item.skuId === id)   //find返回元素
        item.selected = selected
    }
    const allCount =computed(()=>cartList.value.reduce((a,c)=>a+c.count,0)) 
    const allPrice =computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0)) 
    return{
        cartChange,
        allCount,
        allPrice,
        cartList,
        cartAdd,
        cartdelate
    }
},{
    persist: true,
})