<template>
  <div class="inline-flex ml-3 my-1 rounded-md shadow">
    <a
      target="_blank"
      :href="url"
      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:outline-none"
      >{{buttonText}}</a
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AddToCartButton',
    props: {
      url: String,
      buttonText: String,
    }
})
</script>