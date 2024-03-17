/*
添加拦截器:
    拦截 request 请求
    拦截 uploadFile 文件上传

TODO:
    1. 非 http 开头需拼接地址
    2.请求超时
    3.添加小程序端请求头标识
    4.添加 token 请求头标识
*/
import { useMemberStore } from '@/stores'

//一个基础地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(options: UniApp.RequestOptions) {
    //1.请求之前拼接完整地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //请求超时
    options.timeout = 10000
    //添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

//拦截请求 因为是同一个服务器，所以都用httpInterceptor
uni.addInterceptor('request', httpInterceptor)
//拦截上传文件
uni.addInterceptor('uploadFile', httpInterceptor)
