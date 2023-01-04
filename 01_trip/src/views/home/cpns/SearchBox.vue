<script setup>
import { useRouter } from 'vue-router'

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    res => {
      console.log('获取位置成功:', res)
    },
    err => {
      console.log('获取位置失败:', err)
    }
  )
}
const router = useRouter()
const cityClick = () => {
  router.push('/city')
}
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    font-size: 15px;
    color: #333;
  }

  .position {
    display: flex;
    justify-content: center;

    .text {
      position: relative;
      top: 3px;
      font-size: 12px;
      color: #999;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>