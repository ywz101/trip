<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCity } from '@/store/modules/city'
import { storeToRefs } from 'pinia'
import Group from './cpns/Group.vue'

// 1.搜索框
const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}

// 2.tab标签页
const tabActive = ref()

// 3.从store中获取数据
const cityStore = useCity()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 4.点击tab标签页后获取的数据
// const changeClick = () => {
//   console.log('ok')
// }

const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框(圆角) -->
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" shape="round" show-action @cancel="cancelClick" />

      <!-- 2.tab标签页 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key">
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <Group 
          v-show="tabActive === key"
          :groupData="value"
        />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }

}
</style>