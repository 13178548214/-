import {ref,onUnmounted, computed} from 'vue'
import  dayjs  from 'dayjs'
export const CountDown = ()=>{
    let timer = null
    //定义一个数据
    const time = ref(0)
    //定义一个初始函数

    //格式化时间
    const formatTime = computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    const start = (current)=>{
        time.value = current
       timer = setInterval(()=>{
       time.value--
      },1000)
    }
    onUnmounted(()=>clearInterval(timer))
    return {
        formatTime,
        start,
    }
}