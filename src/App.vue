<template>
  <div>
    <header class="bg-white shadow border-b-2 border-gray-300" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">{{ $route.meta.title }}</h1>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-4 max-w-2xl gap-x-0 sm:gap-x-10">
        <div class="" v-for="group in 4" v-bind:key="group">
          <h4 class="text-xl leading-tight text-gray-600">Link Group {{group}}</h4>
          <ul class="ml-1 px-2 pt-2 sm:pt-6 pb-4 sm:pb-0">
            <li v-for="link in Math.ceil(Math.random()*5)" v-bind:key="link">
              <a href="#" class="text-sm text-gray-500">Link {{group}} - {{link}}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="border-t-2 border-gray-200 w-full px-4 py-4 mx-auto sm:px-6 lg:py-6 lg:px-8">
      <div class="mx-auto w-max flex justify-center content-center">
        <CubeTransparentIcon class="h-6 w-6 text-blue-500"/>
        <span class="ml-1">Naked test &copy;{{ new Date().getFullYear() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { CubeTransparentIcon } from '@heroicons/vue/solid'

export default {
  components: { CubeTransparentIcon }
}
</script>