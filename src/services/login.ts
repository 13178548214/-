import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

export type loginParams = {
  code: string
  encryptedData: string
  iv: string
}
//封装登录接口
export const postLoginAPI = (data: loginParams) => {
  return http<LoginResult>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

//小程序内测版登录   /login/wxMin/simple
export const postLoginSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: { phoneNumber },
  })
}
