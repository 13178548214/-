import type { PageParams } from '@/types/global'
import type { HotItem } from '@/types/home'
import { http } from '@/utils/http'

export const getHotRecommentAPI = (url: string, data?: PageParams & { subType: string }) => {
  return http<HotItem>({
    method: 'GET',
    url,
    data,
  })
}
