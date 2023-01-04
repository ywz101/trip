<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 1.搜索框
const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}

// 2.tab标签页
const tabActive = ref()
</script>

<template>
  <div class="city top-page">
    <!-- 1.搜索框(圆角) -->
    <van-search 
      v-model="searchValue" 
      placeholder="请输入搜索关键词" 
      shape="round"
      show-action
      @cancel="cancelClick"
    />

    <!-- 2.tab标签页 -->
    <van-tabs v-model:active="tabActive"
              color="#ff9854">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>

</style>