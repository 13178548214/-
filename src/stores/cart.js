import { defineStore } from "pinia";
import {ref} from 'vue'
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
    return{
        cartList,
        cartAdd
    }
},{
    persist: true,
})