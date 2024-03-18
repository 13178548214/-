<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

//获取轮播图数据
const homeBannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  homeBannerList.value = res.result
  console.log(homeBannerList.value)
}

//获取前台分类数据
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()
}

onLoad(() => {
  getHomeBanner(), getHomeCategory()
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
