import type { BannerItem } from '@/types/home'
import type { CategoryItem } from '@/types/home'
import type { HotItem } from '@/types/home'
import { http } from '@/utils/http'
import type { PageResult } from '@/types/Global'
import type { GuessItem } from '@/types/home'

//轮播图·
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

//前台展示
// /home/category/mutli
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

//热门推荐
// /home/hot/mutli
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}

//猜你喜欢
// /home/goods/guessLike
export const getHomeGuessLikeAPI = () => {
  return http<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
  })
}
