import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref()
  const selectedJustAddress = ref()
  const selectedAddressNow = ref()
  const changeAddress = (item: AddressItem) => {
    //修改地址详细信息
    selectedAddress.value = item
    //跳回上一页
    uni.navigateBack()
  }

  const changeJuastAddress = (item: AddressItem) => {
    //单纯地址信息
    selectedJustAddress.value = item.fullLocation + item.address
    //地址和联系人信息
    selectedAddressNow.value = item
  }

  return {
    changeAddress,
    selectedAddress,
    changeJuastAddress,
    selectedJustAddress,
    selectedAddressNow,
  }
})
