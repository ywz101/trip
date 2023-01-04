<script setup>
defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
}) 
</script>

<template>
  <div class="group">
    <!-- 3.indexBar(索引栏) -->
    <van-index-bar>
      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(item2, index2) in item?.cities">
          <van-cell :title="item2.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>

</style>