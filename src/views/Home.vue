<template>
  <div class="flex flex-col w-full items-center">
    <div class="container side-shadow">
      <div class="h-20 bg-brand-200 justify-center flex flex-col items-center relative">
        <div class="absolute top-0 right-0 mr-1 mt-1">
          <svg version="1.1" class="h-3 w-3 fill-current text-gray-700 mr-1 mt-1 hover:text-black cursor-pointer" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
          <g>
            <g>
              <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
                c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
                c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
            </g>
          </g>
          </svg>
        </div>
        <div class="flex items-baseline">
          <p class="text-lg text-gray-700">Get the latest updates on your tax appeals during COVID</p>
          <p class="text-brand-700 text-sm ml-4 bg-white hover:bg-brand-500 hover:text-white rounded px-3 py-1 cursor-pointer hover:underline">Learn More</p>
        </div>
        
      </div>
      <NavBar />
      <div class="flex relative bg-gray-100" style='height: 70vh;'>
        <!-- <div class="absolute w-full h-full" style="background: #02050385">

        </div> -->
        <div class="absolute justify-center flex flex-col z-10 pl-8 pr-6 flex-col items-start h-full ">
          <p class="text-5xl text-gray-800 font-bold text-left leading-tight">Start saving money <br> on your property taxes</p>
          <p class="text-lg text-left mt-4 text-gray-800 font-hairline leading-tight">File an appeal and reduce your real estate taxes or <br> get your money back - guaranteed</p>
          <div class="rounded-full bg-brand-500 px-16 py-2 mt-4 text-white hover:bg-brand-600 mb-6">
            <p class="text-md font-light ">Appeal</p> 
          </div>
        </div>
        <img class="ml-auto " style="width: 55%" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">

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
.background-img{
  background: url("../assets/sanfran.png") top right no-repeat;
  background-attachment: fixed;
  background-size: 85%;
  background-position: 70% 80%;
}

.side-shadow{
  box-shadow: 0 0px 20px 0 rgba(0,0,0,.4)
}
</style>
