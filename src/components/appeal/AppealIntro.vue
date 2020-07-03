<template>
  <div  class="absolute h-full w-full flex flex-col items-center">
               
        <div :class="(activeStage==1 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==1) ? ['opacity-0', 'translate-50'] : ['opacity-0', 'translate-50m']"  class="common-trans flex-1 flex flex-col pb-24 justify-center items-center">
            
            
            <div class="flex justify-center items-center h-64 w-64 bg-gray-200 rounded-full">
                <img class="w-48 h-auto mb-6" src="../../assets/government.png" alt="">
            </div>
            <h1 class="text-4xl text-left w-full mx-auto mt-4">Welcome to <span class="font-bold text-brand-700">real</span><span class="font-bold text-brand-500">Appeal</span>,</h1>

            <h1 class="text-4xl -mt-2">Let's get you the largest return possible</h1>
            <h1 class="w-full text-left mt-4">Here's what we'll do together:</h1>
            <ul class="list-disc">
                <li class="text-left">Lorem ipsum dolor sit amet</li>
                <li class="text-left">Pellentesque eleifend sagittis nisi, quis tincidunt dui tristique a.</li>
                <li class="text-left">Suspendisse vitae tellus at justo maximus</li>
            </ul>
        </div>
        <div class="h-32 w-3/4 flex mt-auto items-center justify-end relative">
            <div :class="(activeStage==1 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==1) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
            <button @click="$store.commit('setActiveStage', activeStage+nextValue)" :class="(activeStage==1 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==1) ? ['opacity-0', 'translate-50'] : ['opacity-0', 'translate-50m']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
        </div>

    </div>
</template>

<script>
export default {
    props: ['activeStage', 'savings', 'animDelay' , 'prevStage', 'nextValue']
}
</script>

<style>

</style>