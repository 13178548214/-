<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

const homeBannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  homeBannerList.value = res.result
  console.log(homeBannerList.value)
}

onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="homeBannerList" />
  <CategoryPanel />
  <view class="index"> </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
