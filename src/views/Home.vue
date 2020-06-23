<template>
  <div class="flex flex-col w-full items-center overflow-x-hidden">
      <div class="flex flex-col relative ">
        <div class="flex flex-col h-screen">
          <NavBar />
         <div class="flex-1 flex relative h-screen" >
          <!-- <div class="absolute w-full h-full" style="background: #02050385">

          </div> -->
          <!-- <div class="absolute w-1/2 justify-center flex flex-col z-10 px-20 flex-col items-center h-full ">
          <div class="flex flex-col items-start">
            <p class="text-4xl text-gray-800 font-bold text-left leading-tight">Start saving money <br> on your property taxes</p>
            <p class="text-lg text-left mt-4 text-gray-800 font-hairline leading-tight">File an appeal and reduce your real estate taxes or <br> get your money back - guaranteed</p>
            <div class="rounded bg-brand-500 cursor-pointer px-8 py-2 mt-4 text-white hover:bg-brand-600 mb-3">
              <p class="text-md font-light ">Appeal</p> 
            </div>
          </div>
            
          </div> -->
          
          <div class="relative pb-4 lg:pb-o flex content-center items-stretch justify-center" style="min-height: 55vh;">
            <div id="blackOverlay" class="w-full flex justify-end h-full absolute " >
              <div class="z-50 absolute rounded bg-white shadow-xl border border-gray-200 z-50" style="top:50%; transform: translateY(-50%); height: 25rem; left: 60%">
                
              </div>
              <div class="absolute rounded pt-4 bg-white flex justify-center items-center shadow-xl border border-gray-200 z-50 w-1/3" style="top:50%; transform: translate(-50%, -50%); height: 25rem; left: 75%;">
                <div class="flex flex-col items-stretch">
                  <div class="bg-gray-200 h-64 w-64 rounded"></div>
                  <h1 class="text-xl mt-6">Average savings in LA County: </h1>
                  <h1 class="text-xl mt-1 font-bold">$2,560</h1>
                </div>
                <div class="absolute flex top-0 left-0 p-2">
                  <div class="h-3 w-3 mr-2 bg-red-500 rounded-full "></div>
                  <div class="h-3 w-3 mr-2 rounded-full " style="background: #fbbd35"></div>
                  <div class="h-3 w-3 mr-2 bg-green-500 rounded-full "></div>
                </div>
              </div>
              <div class="absolute right-0 h-full bg-teal-500 w-1/4">

              </div>
            </div>
            <div class="relative w-screen flex justify-center items-stretch my-auto">
              <div class="flex justify-start h-full container justify-center sm:justify-start mx-4 md:mx-0">
                <div class="flex flex-col items-start text-white rounded-md pb-4 pr-auto">
                  <p class="text-2xl w-full text-gray-800 text-center sm:text-left sm:text-2xl lg:text-45xl xl:text-5xl leading-none font-bold">Start saving money <br> on your property taxes</p>
                  <p class="text-sm w-full text-gray-800 text-center sm:text-left sm:text-lg leading-none font-normal mt-6 hidden sm:block">File an appeal and reduce your real estate taxes or get <br> your money back - guaranteed</p>
                  <p class="text-sm w-full text-gray-800 text-center sm:text-left sm:text-md leading-none px-1 font-normal pt-4 mt-6 hidden sm:block">Search by city or county</p>
                  <div class="flex justify-start w-full mt-2 ">
                    <input type="text" class="bg-white rounded outline-none focus:border-teal-500 w-3/4 border-gray-500 text-gray-800 px-2 py-2 border  text-md" placeholder="City/County">
                  </div>
              </div>
            </div>
          </div>
          </div>

          </div>

          <div class="bg-white w-full flex justify-center bg-gray-100 py-12"> 
          <div class="flex container justify-center lg:justify-center items-center pt-1 w-full mx-2 md:mx-2" style="max-width: 920px;">
            <div class="flex flex-col sm:flex-row sm:items-center w-full items-center"><div class="sm:flex-1 sm:h-full flex items-center justify-start animated"><div class="flex flex-col items-center"><img alt="realAppeal" itemprop="image" src="../assets/roofs.png" ><div class="flex items-baseline mb-1">
              </div>
              </div>
              </div>
              <div class="flex-1 h-full flex items-center sm:ml-4">
                <div class="flex flex-col items-start">
                  <p class="font-medium hidden sm:block sm:text-2xl mb-6 text-gray-800"> What is realAppeal? </p>
                  <p class="text-md sm:text-lg font-light hidden lg:block text-left">RealAppeal is an online solution for homeowners identify if they're paying too much in real estate taxes. We are currently filing appeals for customers nationwide, in accordance with local laws and deadlines.</p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
        </div>
        

        

              </div>
      
      

      <!-- <div class="h-20 bg-brand-200 justify-center flex flex-col items-center relative border-b border-gray-300">
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
          <p class="text-base text-gray-800">Get the latest updates on your tax appeals during COVID</p>
          <p class="text-brand-700 text-sm ml-4 bg-white hover:bg-brand-500 hover:text-white rounded px-3 py-1 cursor-pointer hover:underline">Learn More</p>
        </div>
        
      </div> -->

     

      <section class="flex-1 text-gray-700 body-font flex mt-8 mb-2 flex-col justify-center">
        <div class="container px-5 mx-auto flex flex-col items-center">
          <div class="flex flex-col items-center mx-auto">
            <h1 class="flex-grow text-5xl font-medium title-font text-gray-800">The savings process</h1>
            <div class="mt-4 h-1 w-16 bg-gray-600">

            </div>
          </div>
        </div>
      </section>


      <section v-for="(step,ind) in steps" :key="ind" class="w-full text-gray-700 body-font flex items-stretch justify-center" style="height: 50vh" :class="ind%2==0 ? 'flex-row' : 'flex-row-reverse'">
        <div class="w-1/2 flex items-center" :class="ind%2==0 ? 'justify-end' : 'justify-start'">
          <div class="flex flex-col sm:ml-3" :class="ind%2==0 ? 'items-end' : 'items-start'">
            <div class="flex flex-col" :class="ind%2==0 ? 'items-end' : 'items-start'">
              <div class="bg-teal-500 rounded-full h-12 w-12 shadow-md flex justify-center items-center">
                <p class="text-3xl text-white font-medium ">{{ind+1}}</p>
              </div>
              <p class="font-bold sm:text-45xl mt-4 mb-2 text-gray-800" :class="ind%2==0 ? 'text-right' : 'text-left'"> {{step.heading}}</p>
            </div>
            <p class="text-md w-80 sm:text-lg font-light hidden lg:block" :class="ind%2==0 ? 'text-right' : 'text-left'">{{step.desc}}</p>
          </div>
        </div>
        <div class="w-1/2 py-4 px-12 flex flex-col " :class="ind%2==0 ? ['items-start'] : ['items-end']">
          <img class="flex-1 w-auto" style="height: 100%; object-fit: cover" :src="require('../assets/' + step.image)" alt="">
        </div>
      </section>
      


      <!-- <section class="text-gray-700 body-font">
        <div class="container px-5 pt-2 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-brand-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
                  <h2 class="font-medium title-font text-md text-white tracking-wider">1</h2>

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-bold text-left title-font text-lg text-gray-900 mb-1">Your property is overassessed</h2>
                  <p class="leading-relaxed text-left">Property tax assessments are done in large swatches and are often inaccurate. Over 45% of homes are overassessed.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
                  <h2 class="font-medium title-font text-md text-white">2</h2>

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-bold text-left title-font text-lg text-gray-900 mb-1">We estimate your tax savings</h2>
                  <p class="leading-relaxed text-left">We calculate your potential tax savings by using your home information to determine a fair assessment of your home's value based on nearby properties.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
                  <h2 class="font-medium title-font text-md text-white tracking-wider">3</h2>

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-bold text-left title-font text-lg text-gray-900 mb-1">We submit your appeal, hassle-free</h2>
                  <p class="leading-relaxed text-left">Submit an appeal through realAppeal and we will handle all the paperwork working with your tax assessors to help you save on your real estate taxes.</p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
                  <h2 class="font-medium title-font text-md text-white tracking-wider">4</h2>

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-bold text-left title-font text-xl text-gray-900 mb-1">You save money</h2>
                  <p class="leading-relaxed text-left">Within 6-8 weeks you will hear from your county how much your tax bill is reduced by. Over 90% of our appeals are successful and have saved customers thousands of dollars.</p>
                </div>
              </div>
            </div>
            <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step">
          </div>
        </div>
      </section> -->

      <section class="flex-1 text-gray-700 body-font flex mt-8 mb-2 flex-col justify-center">
        <div class="container px-5 mx-auto flex flex-col items-center">
          <div class="flex flex-col items-center mx-auto">
            <h1 class="flex-grow text-5xl font-medium title-font text-gray-800">Follow the money</h1>
            <div class="mt-4 h-1 w-16 bg-gray-600">

            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-700 body-font flex items-stretch justify-center" style="height: 50vh">
        <div class="container py-16 flex flex-row-reverse px-5 mx-auto">
          <div class="lg:w-1/2 flex flex-col justify-center items-start mx-auto">
            <h1 class="text-4xl font-black title-font text-left text-gray-800">You could be overpaying on your property taxes every year</h1>
            <h1 class="text-2xl font-regular title-font text-left mt-4 text-gray-800">Start the appeal process to find out how much you can save</h1>
            <button class="text-2xl font-medium title-font bg-brand-500 text-white text-left mt-4 px-12 py-2 rounded">Appeal</button>
          </div>
          <div class="w-1/2 h-full py-16 flex mr-auto justify-center" >
            <img class="h-full w-auto" :src="require('../assets/' + 'money.png')" alt="">
          </div>
        </div>
      </section>

      <!-- <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row-reverse flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is realAppeal?
            </h1>
            <p class="mb-8 leading-relaxed">realAppeal is an online solution for property tax appeals. We help homeowners identify if they're paying too much in real estate taxes. If so, we can quickly appeal their property taxes getting property owners the savings they deserve. We are currently filing appeals for customers nationwide, in accordance with local laws and deadlines.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
        </div>
      </section> -->

      
    
    
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'


export default {
  name: 'Home',
  data() {
    return {
      steps: [],
    }
  },
  components: {
    NavBar,
  },
  created() {
    this.steps = this.$store.state.steps
  },
  computed: {
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
