
import  httpInstance  from '@/utils/http'
export function findNewAPI (){
    return httpInstance({
      url:'/home/new'
    })
  }

  export function getBannerAPI (params = {}){
    const {distributionSite = '1'} = params
    return httpInstance({
      url:'home/banner',
      params:{distributionSite}
    })
  }

  export function getHotAPI () {
    return  httpInstance({
      url:  'home/hot'
    })
  }

  export function getGoodsAPI () {
    return httpInstance({
      url: '/home/goods'
    })
  }