<template>
  <div class="flex px-12 py-2 items-center ">
      <div class="flex items-end lg:w-1/2 cursor-pointer sm:my-0">

        <img class="" width="40px" height="40px" alt="realAppeal_icon.png" data-type="image" src="../assets/realappeal_logo.png">

        <div class="flex items-baseline ">
          <p class="text-xl md:text-xl font-bold ml-2 text-brand-700"> real<span class=" text-brand-500 ">Appeal</span> </p>
        
          <p class="text-sm hidden sm:block font-light ml-2 "> simple & fast property tax appeals</p>
        </div>
        
      </div>
      <div class="flex items-stretch ml-auto items-center mt-2">
        <router-link class="mx-6" v-for="(route,ind) in routes" :key="ind" to="/">
          <nav-bar-item :label="route.name"/>
        </router-link>
      </div>
      
  </div>
</template>

<script>
import NavBarItem from './NavBarItem.vue'

export default {
  components: {
    NavBarItem
  },
  data() {
    return {

    }
  },
  computed: {
    routes() {
      return this.$store.getters.getRoutes
    },
  }
}
</script>

<style>

</style>