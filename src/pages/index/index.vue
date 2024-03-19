<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import type { CategoryItem } from '@/types/home'
import type { HotItem } from '@/types/home'
import HotPanel from './components/HotPanel.vue'
import { getHomeHotAPI } from '@/services/home'
import type { XtxGuessInstance } from '@/types/component'
import Pageskeleton from './components/Pageskeleton.vue'

//获取轮播图数据
const homeBannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  homeBannerList.value = res.result
  console.log(homeBannerList.value)
}

//获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHot = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

//加载更多
const guess = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  guess.value?.getmore()
}

const isTriggered = ref(false)

//下拉刷新数据
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guess.value?.resData()
  /* await new Promise(() => [getHomeBanner(), getHomeHot(), getHomeCategory()]) 也可*/
  await Promise.all([getHomeBanner(), getHomeHot(), getHomeCategory(), guess.value?.getmore()])
  isTriggered.value = false
}

const isLoding = ref(true)
onLoad(async () => {
  await Promise.all([getHomeBanner(), getHomeCategory(), getHomeHot()])
  isLoding.value = false
})
</script>

<template>
  <!-- 顶部导航栏 -->
  <CustomNavbar />
  <!-- 为了固定顶部导航栏不动 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scool-view"
    scroll-y
  >
    <Pageskeleton v-if="isLoding" />
    <template v-else>
      <!-- 轮播图展示 -->
      <XtxSwiper :list="homeBannerList" />
      <!-- 前台展示 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guess" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scool-view {
  flex: 1;
}
</style>
