import { http } from '@/utils/http'

export type loginParams = {
  code: string
  encryptedData: string
  iv: string
}
//封装登录接口
export const postLoginAPI = (data: loginParams) => {
  return http({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}
