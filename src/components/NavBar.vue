<template>
  <div class="flex justify-center shadow-md z-50  w-full px-6 xl:px-12 py-2 items-center ">
      <div class="flex  items-end cursor-pointer sm:my-0">
        <router-link class="" to="/">

        <img class="" width="40px" height="40px" alt="realAppeal_icon.png" style="cursor: pointer !important" data-type="image" src="../assets/realappeal_logo.png">

        </router-link>

        <div class="flex items-baseline ">
          <router-link class="" to="/">
            <p class="text-xl md:text-xl font-bold ml-2 text-brand-700" style="cursor: pointer !important"> real<span class=" text-brand-500 ">Appeal</span> </p>
          </router-link>
        
          <p class="text-sm hidden sm:block font-light ml-2 "> simple & fast property tax appeals</p>
        </div>
        
      </div>
      <div class="flex items-stretch ml-auto items-center mt-2">
        <router-link class="mx-6" v-for="(route,ind) in routes" :key="ind" :to="route.route">
          <nav-bar-item v-if="(route.route != '/' && $router.currentRoute != '/')" :route="route.route" :label="route.name"/>
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