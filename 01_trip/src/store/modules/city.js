import { defineStore } from 'pinia'
import { getCityAll } from '@/service'

export const useCity = defineStore('city', {
  state: () => ({
    allCities: []
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})