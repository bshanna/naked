<template>
    <div class="bg-gray-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <h2 class="flex text-3xl text-green-800 font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          <span class="flex-grow">
            <router-link
              to="/"
              class="text-gray-800"
              >Home
            </router-link>
            / All Wines ({{currentWines.length}})
          </span>
          <div class="flex-none">
            <Filters :filters="winesPageData.filters" @update-filter="updateFilter" />
          </div>
        </h2>
        <div v-if="currentWines.length === 0">

          <div v-if="currentWines.length === 0" class="text-xl sm:text-2xl mx-auto my-44 w-72 rounded-lg bg-gray-100 px-8 py-4 shadow-lg">
            Looks like we have no wines that match your current filter criteria.
          </div>
        </div>
        <div v-if="currentWines.length > 0" class="grid grid-cols-1 sm:grid-cols-3 sm:gap-6">
          <div class="my-2 bg-gray-200 rounded-md shadow-lg" v-for="wine in currentWines" v-bind:key="wine.id">
            <WineCard 
              v-bind:id="wine.id" 
              v-bind:name="wine.name"
              v-bind:url="wine.url"
              v-bind:displayPriceUSD="wine.displayPriceUSD"
              v-bind:angelPriceUSD="wine.angelPriceUSD"
              v-bind:imageURL="wine.imageURL"
              v-bind:profile="wine.profile"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import WineCard from '@/components/WineCard.vue'
import Filters from '@/components/Filters.vue'

export default defineComponent({
  components: { WineCard, Filters },
  data() {
    return {
      currentWines: [],
      winesPageData: {
        "filters": [],
        "wines": [],
      }
    }
  },
  created() {
    fetch("wines.json")
      .then(response => response.json())
      .then(data => {
        this.winesPageData = data
        this.currentWines = data.wines
      })
  },
  methods: {
    updateFilter(options) {
      this.currentWines = this.winesPageData.wines.filter((wine) => {
        // we have multiple filter options. we need to make sure each element passes every filter
        const goodFilterCount = options.length
        let currentFilterCount = 0;
        options.forEach((option) => {
          const [key, val] = option.split('::')
          if(val.indexOf('all ') === 0 || wine[key] === val) {
            currentFilterCount ++;
          }
        })
        return currentFilterCount === goodFilterCount
      })
    }
  }
})
</script>