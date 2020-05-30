<template>
  <div class="flex flex-col w-full items-center">
    <div class="container side-shadow">
      <NavBar />
      <div class="flex relative" style="height: 75vh">
        <div class="flex z-10 pl-12 pr-6 flex-col items-start justify-center mb-12">
          <p class="text-4xl text-gray-800 font-bold text-left leading-tight">Start saving money <br> on your property taxes</p>
          <p class="text-xl text-left mt-4 text-gray-800">File an appeal and reduce your real estate taxes or get your money back - guaranteed</p>
          <div class="rounded-full bg-brand-500 px-16 py-2 mt-4 text-white hover:bg-brand-600">
            <p class="text-md font-light ">Appeal</p> 
          </div>
        </div>
        <img class="mb-24" src="../assets/landing2.svg" alt="">

      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
  }
}
</script>


<style scoped>
.side-shadow{
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.08)
}
</style>
