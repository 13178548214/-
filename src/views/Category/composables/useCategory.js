import { getCategoryAPI } from '@/apis/category';
import {ref,onMounted} from 'vue'
import { useRoute,onBeforeRouteUpdate } from 'vue-router';

export function useCategory(){
    const categoryData = ref({})
const route = useRoute()

const getCategory = async(id=route.params.id) =>{
  const res = await getCategoryAPI(id)
  categoryData.value = res.result
}

onMounted(()=>
  {getCategory()}
)

/* 在路由改变前获取到新的参数重新渲染新的路由 */
onBeforeRouteUpdate((to)=>{
   getCategory(to.params.id)
})
return {categoryData}
}