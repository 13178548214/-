import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';

export const useCategoryStore = defineStore('counter', () => {
    const CategoryList = ref([])
    const getCategory = async() =>{
     const res = await getCategoryAPI()
     CategoryList.value = res.result
    }
    

  return {
     getCategory ,
     CategoryList
}
})
