<script setup>
import { ref } from 'vue'
import { tabbarData } from '@/assets/data/tabbarData'
import { getAssetsURL } from '@/utils/load_assets'

const currentIndex = ref(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex"
                active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img 
              v-if="currentIndex !== index"
              :src="getAssetsURL(item.image)" alt="">
            <img 
              v-else
              :src="getAssetsURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>