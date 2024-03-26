import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref()

  const changeAddress = (item: AddressItem) => {
    //修改地址
    selectedAddress.value = item
    //跳回上一页
    uni.navigateBack()
  }

  return { changeAddress, selectedAddress }
})
