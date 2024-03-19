import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'

// /category/top
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
