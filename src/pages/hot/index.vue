<script setup lang="ts">
import { getHotRecommentAPI } from '@/services/hot'
import type { SubTypeItem } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
//接受参数
const query = defineProps<{
  type: string
}>()
//找到对应的类型
const currentUrl = hotMap.find((v) => v.type == query.type)

//渲染对应的标题
uni.setNavigationBarTitle({ title: currentUrl!.title })

//定义推荐封面图
const bannerPicture = ref('')

//定义推荐选项
const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([])

//定义下标
const activeIndex = ref(0)

//获取数据
const getHotRecomment = async () => {
  const res = await getHotRecommentAPI(currentUrl!.url, {
    //技巧：环境变量，开发环境修改初始页面方便测试分页结束
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10,
  })
  //初始化封面图
  bannerPicture.value = res.result.bannerPicture
  //初始化推荐选项
  subTypes.value = res.result.subTypes
}

//触底触发
const onScrolltolower = async () => {
  //获取当前选项
  const currentSubType = subTypes.value[activeIndex.value]
  if (currentSubType.goodsItems.page < currentSubType.goodsItems.pages) {
    //当前选项的页码累加
    currentSubType.goodsItems.page++
  } else {
    //标记已结束
    currentSubType.finish = true
    //提示已结束
    return uni.showToast({ icon: 'none', title: '没有更多数据了~' })
  }
  //重新获取数据
  const res = await getHotRecommentAPI(currentUrl!.url, {
    subType: currentSubType.id,
    page: currentSubType.goodsItems.page,
    pageSize: currentSubType.goodsItems.pageSize,
  })
  //提取新数据
  const newCurrentSubType = res.result.subTypes[activeIndex.value]
  //渲染新数据
  currentSubType.goodsItems.items = [...newCurrentSubType.goodsItems.items]
}

onLoad(() => {
  getHotRecomment()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="index === activeIndex"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '已经没有更多数据了' : '加载更多' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
