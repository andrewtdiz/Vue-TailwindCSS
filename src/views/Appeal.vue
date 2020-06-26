<template>
  <div class="flex flex-col w-full items-center">
      
      <div class="flex flex-col w-full min-h-screen">

      
        <NavBar />
        <div class="w-full flex-col flex flex-1">

            <div :class="activeStage>=1 ? 'block' : 'hidden'" class="flex w-full">
                <div class="mx-auto  mt-4  h-16 border-b border-gray-300 flex justify-center items-center w-3/4">
                    <div class="flex mr-2 w-1/5 flex-col items-end">
                        <p class="font-medium">ESTIMATED APPEAL: </p>
                        <p class="font-medium text-gray-500">(in progress)</p>
                        
                    </div>
                    <div class="flex flex-1 flex-col ml-2 justify-center items-start">
                        <p class="font-bold text-3xl">$ N/A</p>
                        
                    </div>
                    <div class="ml-auto w-1/5 flex items-center">
                        <p>Help</p>
                    </div>
                </div>
                
            </div>
            <div :class="activeStage>=1 ? 'block' : 'hidden'" class="flex-1 overflow-x-hidden relative">
                <div  class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==1 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==1) ? ['opacity-0', 'translate-50'] : ['opacity-0', 'translate-50m']"  class="common-trans flex-1 flex flex-col pb-24 justify-center items-center">
                   
                   <div class="flex justify-center items-center h-64 w-64 bg-gray-200 rounded-full">
                        <img class="w-48 h-auto mb-6" src="../assets/government.png" alt="">
                   </div>
                   <h1 class="text-4xl">Let's get you the largest return possible</h1>
                   <h1 class="w-full text-left mt-4">Here's what we'll do together:</h1>
                   <ul class="list-disc">
                       <li class="text-left">Lorem ipsum dolor sit amet</li>
                       <li class="text-left">Pellentesque eleifend sagittis nisi, quis tincidunt dui tristique a.</li>
                       <li class="text-left">Suspendisse vitae tellus at justo maximus</li>
                   </ul>
                </div>
                <div class="h-32 w-3/4 flex mt-auto items-center justify-end">
                    <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==1 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==1) ? ['opacity-0', 'translate-50'] : ['opacity-0', 'translate-50m']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                </div>

            </div>

            <div :class="(activeStage==2 && animDelay) ? ['block'] : (activeStage>2 && animDelay) ? ['hidden'] : (activeStage<2 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-center items-center">
                   <div class="w-full">
                    <h1 class="text-4xl font-bold">Do any of these descriptions match you?</h1>

                   </div>
                </div>
                <div class="h-32 w-3/4 flex mt-auto items-center justify-between">
                    <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                    <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                </div>

            </div>
            
            </div>
            
                

            <div :class="activeStage==0 ? ['block'] : ['hidden']"  class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div>

            


            
            
        </div>
        
      
      </div>

      <div class="w-full h-16 flex-col items-center overflow-x-hidden">
            <div class="flex justify-center items-baseline">
                <p class="text-gray-600 cursor-pointer hover:text-gray-800 px-1">License Agreement</p> |
                <p class="text-gray-600 cursor-pointer hover:text-gray-800 px-1">Privacy</p> |
                <p class="text-gray-600 cursor-pointer hover:text-gray-800 px-1">Security</p>

            </div>
            <p class="text-gray-600 px-1">© Copyright realAppeal Financial Solutions LLC 2020</p>
        </div>
    
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    components: {
        NavBar
    },
    beforeCreate() {
        
        this.$store.commit('setActiveStage', 0)

        setTimeout(() => {
            this.$store.commit('setActiveStage', 1)

        }, 1500); 
    },
    data() {
        return {
            show: false,
            anim: false,
            animDelay: false,
            allStages: [
                {

                }
            ],
        }
    },
    watch: {
        activeStage() {
            this.anim = false
            this.animDelay = false
            setTimeout(() => {
                this.anim = true
            }, 50)
            setTimeout(() => {
                this.animDelay = true
            }, 450)
        },
    },
    computed: {
        appealStage() {
            return this.$store.getters.getStage
        },
        activeStage() {
            return this.$store.getters.getActiveStage
        },
        prevStage() {
            return this.$store.getters.getPrevStage
        },
    }

}
</script>

<style>
.common-trans { 
    transition: all 0.4s ease;
}

.translate-50 {
    transform: translateX(150px);
}

.translate-50m {
    transform: translateX(-150px);
}

.translate-0 {
    transform: translateX(0px);
}

.sk-fading-circle {
  margin: 100px auto;
  width: 60px;
  height: 60px;
  position: relative;
}

.sk-fading-circle .sk-circle {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.sk-fading-circle .sk-circle:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #63B7AF;
  border-radius: 100%;
  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
          animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
}
.sk-fading-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);
}
.sk-fading-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);
}
.sk-fading-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}
.sk-fading-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);
}
.sk-fading-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg);
}
.sk-fading-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.sk-fading-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg);
}
.sk-fading-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);
}
.sk-fading-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg);
}
.sk-fading-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); 
}
.sk-fading-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); 
}
.sk-fading-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; 
}
.sk-fading-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; 
}
.sk-fading-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; 
}
.sk-fading-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; 
}
.sk-fading-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; 
}
.sk-fading-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; 
}
.sk-fading-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; 
}
.sk-fading-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.sk-fading-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.sk-fading-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.sk-fading-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

@keyframes sk-circleFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
}
</style>