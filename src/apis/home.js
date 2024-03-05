
import  httpInstance  from '@/utils/http'
export function findNewAPI (){
    return httpInstance({
      url:'/home/new'
    })
  }