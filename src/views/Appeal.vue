<template>
  <div class="flex flex-col w-full items-center">
      
      <div class="flex flex-col w-full min-h-screen">

      
        <NavBar />
        <div class="w-full flex-col flex flex-1 ">

            <Loading :class="activeStage==0 ? ['block'] : ['hidden']" />

            <AppealHeader :class="activeStage>=1 ? 'block' : 'hidden'" :activeStage="activeStage" :savings="savings" :animDelay="animDelay" />
            
            <div :class="activeStage>=1 ? 'block' : 'hidden'" class="flex-1 overflow-x-hidden overflow-y-hidden relative">
                
                <AppealIntro :activeStage="activeStage" :nextValue="0.5" :prevStage="prevStage" :savings="savings" :animDelay="animDelay"  />
                
                <Loading :class="(activeStage==1.5 && animDelay) ? 'block' : 'hidden'" />

                <div :class="(activeStage==2 && anim) ? ['block', 'z-10'] : (activeStage>2 && animDelay) ? ['hidden'] : (activeStage<2 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==2) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="flex ">
                            <svg version="1.1" class="mr-6 mt-2 h-16 w-16 fill-current text-brand-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256
                                            s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98
                                            C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,70c30.327,0,55,24.673,55,55c0,30.327-24.673,55-55,55
                                            c-30.327,0-55-24.673-55-55C201,94.673,225.673,70,256,70z M326,420H186v-30h30V240h-30v-30h110v180h30V420z"/>
                                    </g>
                                </g>
                            </svg>
                        <div class="flex-1">
                                <h1 class="text-4xl text-left ">Property Information</h1>
                                <p class="mr-auto font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>


                                <div class="flex w-full mt-6">
                                    <div class="w-full pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Address:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>

                                <div class="flex w-full mt-6">
                                    <div class="w-1/3 pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">City:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                    <div class="w-1/3 flex pr-6 flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">State:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                    <div class="w-1/3 flex pr-6 flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Zip/Postal Code:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    </div>
                    <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==2) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==2) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                <div :class="(activeStage==3 && animDelay) ? ['block', 'z-10'] : (activeStage>3 && animDelay) ? ['hidden'] : (activeStage<3 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==3 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==3) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5">
                        <h1 class="text-4xl text-left ">Calculating how much you can save...</h1>
                        <p class="mr-auto font-medium text-gray-500 text-left">It'll only be a moment</p>


                    </div>
                    </div>

                </div>


                <div :class="(activeStage==4 && animDelay) ? ['block', 'z-10'] : (activeStage>4 && animDelay) ? ['hidden'] : (activeStage<4 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5">
                        <h1 class="text-4xl text font-black text-brand-500">We estimate you could save</h1>

                        <h1 class="text-6xl ">${{savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} - ${{(savings+800).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h1>
                        <div class="flex -mt-2 justify-center items-center">
                            
                            <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                        </div>
                        <h1 class="text-4xl mx-auto mt-12">only with <span class="font-bold text-brand-700">real</span><span class="font-bold text-brand-500">Appeal</span>,</h1>



                        <p class="text-2xl font-medium text-gray-800 text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                        
                        

                    </div>
                    </div>
                    <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-2)" :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                

                <div :class="(activeStage==5 && animDelay) ? ['block', 'z-10'] : (activeStage>5 && animDelay) ? ['hidden'] : (activeStage<5 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="flex w-1/2">
                            <svg version="1.1" class="mr-6 mt-2 h-16 w-16 fill-current text-brand-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,74.667
                                            c67.635,0,122.667,55.031,122.667,122.667S323.635,320,256,320s-122.667-55.031-122.667-122.667S188.365,74.667,256,74.667z
                                            M256,469.333c-69.707,0-131.52-33.755-170.473-85.615c42.676-20.534,103.621-42.385,170.473-42.385
                                            c66.857,0,127.807,21.854,170.474,42.383C387.521,435.577,325.708,469.333,256,469.333z"/>
                                    </g>
                                </g>
                            </svg>

                            <div class="flex-1 ">
                                <h1 class="text-4xl text-left ">Owner Information</h1>
                                <p class="mr-auto font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>

                                <div class="flex w-full mt-12">
                                    <div class="w-1/2 pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">First Name:</p>
                                        <input type="text" class="outline-none appearance-none py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                    <div class="w-1/2 flex pr-6 flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Last Name:</p>
                                        <input type="text" class="outline-none appearance-none py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>
                                
                                <div class="flex w-full mt-6">
                                    <div class="w-3/5 pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Email Address:</p>
                                        <input type="text" class="outline-none appearance-none py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>

                                <div class="flex w-full mt-6">
                                    <div class="w-full pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Phone Number:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>

                            </div>
                    </div>
                    
                    </div>
                    <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                


                <div :class="(activeStage==6 && animDelay) ? ['block', 'z-10'] : (activeStage>6 && animDelay) ? ['hidden'] : (activeStage<6 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <h1 class="text-4xl text font-black  text-brand-500">We estimate your savings will be</h1>

                        <h1 class="text-6xl ">${{savings}}</h1>
                        <div class="flex -mt-2 justify-center items-center">
                            
                            <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                        </div>

                        <button @click="$store.commit('setActiveStage', activeStage+1)" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 hover:bg-gray-300 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">More savings</button>


                        
                        

                    </div>

                     <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==6) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+2)" :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==6) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Finalize</button>
                    </div>
                    </div>

                </div>

                <div :class="(activeStage==7 && animDelay) ? ['block', 'z-10'] : (activeStage>7 && animDelay) ? ['hidden'] : (activeStage<5 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] :  (prevStage>activeStage && activeStage==7) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/4 flex flex-col items-start">
                        <h1 class="text-4xl text-left ">Do any of these situations apply to you?</h1>
                        <p class="mr-auto font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>
                        
                        <div class="flex items-start mt-6">
                            <Selectable @clicked="savings += 75" @reduce="savings -= 75" :img="'primary'" :question="'Is this your primary residence?'" class="mx-4"/>
                            <Selectable @clicked="savings += 75" @reduce="savings -= 75" :img="'age'" :question="'Are you over the age of 65?'" class="mx-4"/>
                            <Selectable @clicked="savings += 75" @reduce="savings -= 75" :img="'usa'" :question="'Are you a veteran?'" class="mx-4"/>
                        </div>
                    </div>
                    </div>
                    <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==7) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==7) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>
            
                <div :class="(activeStage==8 && animDelay) ? ['block', 'z-10'] : (activeStage>8 && animDelay) ? ['hidden'] : (activeStage<8 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="flex w-1/2">
                            
                            <svg class="mr-6 mt-2 h-16 w-16 fill-current text-brand-500" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886
                                        c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721
                                        c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337
                                        c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697
                                        c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z"/>
                                </g>
                            </g>
                            </svg>


                            <div class="flex-1 mb-12">
                                <h1 class="text-4xl text-left ">Summary</h1>
                                <p class="mr-auto font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>

                                <div class="flex w-full mt-6">
                                    <div class="w-full pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Address:</p>
                                        <h1 type="text" class="outline-none appearance-none py-2 text-md  rounded-md  text-left text-gray-500">1900 Isabel Road Este </h1>
                                    </div>
                                </div>


                                <div class="flex w-full mt-6">
                                    <div class="w-1/3 pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">City:</p>
                                        <h1 type="text" class="outline-none appearance-none py-2 text-md  rounded-md  text-left text-gray-500">Boca Raton </h1>
                                    </div>
                                    <div class="w-1/3 flex pr-6 flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">State:</p>
                                        <h1 type="text" class="outline-none appearance-none py-2 text-md  rounded-md  text-left text-gray-500">FL </h1>
                                    </div>
                                    <div class="w-1/3 flex pr-6 flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Zip/Postal Code:</p>
                                        <h1 type="text" class="outline-none appearance-none py-2 text-md  rounded-md  text-left text-gray-500">33486 </h1>
                                    </div>
                                </div>

                                <div class="w-full bg-gray-200 my-4" style="height: 3px"></div>


                                <div class="flex w-full mt-12">
                                    <div class="w-1/2 pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">First Name:</p>
                                        <h1 type="text" class="outline-none appearance-none py-2 text-md  rounded-md  text-left text-gray-500">Frank </h1>
                                    </div>
                                    <div class="w-1/2 flex pr-6 flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Last Name:</p>
                                        <h1 type="text" class="outline-none appearance-none py-2 text-md rounded-md text-left text-gray-500">DiZenzo </h1>
                                    </div>
                                </div>
                                
                                <div class="flex w-full mt-6">
                                    <div class="w-3/5 pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Email Address:</p>
                                        <h1 type="text" class="outline-none appearance-none py-2 text-md rounded-md text-left text-gray-500">fdizenzo@nd.edu</h1>
                                    </div>
                                </div>

                                <div class="flex w-full mt-6">
                                    <div class="w-full pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Phone Number:</p>
                                        <h1 type="text" class="outline-none appearance-none bg-white py-2 text-md rounded-md text-left text-gray-500">561-927-7213</h1>
                                    </div>
                                </div>

                            </div>
                    </div>
                    
                    </div>
                    <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                <div :class="(activeStage==9 && animDelay) ? ['block', 'z-10'] : (activeStage>9 && animDelay) ? ['hidden'] : (activeStage<9 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <h1 class="text-4xl text font-black  text-brand-500">You're doing great, sweetie!</h1>
                        <p class="font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>

                        <h1 class="text-left text-3xl mt-12">The appeal costs $0 to complete. <br> You only pay us when your appeal is successful. <br> You only pay us 20% of your appeal.</h1>
                        <h1 class="text-left text-3xl"></h1>
                        

                        <h1 class="text-6xl mt-16">${{savings}}</h1>
                        <div class="flex -mt-2 justify-center items-center">
                            
                            <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                        </div>

                        
                        

                    </div>

                     <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==9) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==9) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>
                    </div>

                </div>

                <div :class="(activeStage==10 && animDelay) ? ['block', 'z-10'] : (activeStage>10 && animDelay) ? ['hidden'] : (activeStage<10 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==10 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <h1 class="text-4xl text-left ">Authorization of agency</h1>
                        <p class="font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>


                        <button @click="$store.commit('setShowModal', true)" class="mt-20 common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 hover:bg-gray-300 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">View Authorization</button>

                        <div class="items-center mt-6  flex">
                            <div class="w-6 h-6 mr-4 rounded border border-gray-500">

                            </div>
                            <p class="font-normal text-gray-800 text-left">I hereby authorize realAppeal to represent me as a property tax agent.</p>
                            
                        </div>
                        

                        
                        

                    </div>

                     <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==10 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==10 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==10) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==10 && animDelay) ? ['opacity-50', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==10) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 opacity-50 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>
                    </div>

                </div>
            
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
import AppealToggle from '../components/AppealToggle.vue'
import Selectable from '../components/Selectable.vue'
import AppealHeader from '../components/appeal/AppealHeader.vue'
import AppealIntro from '../components/appeal/AppealIntro.vue'
import Loading from '../components/appeal/Loading.vue'

export default {
    components: {
        NavBar,
        AppealToggle,
        Selectable,
        AppealHeader,
        AppealIntro,
        Loading
    },
    beforeCreate() {
        
        this.$store.commit('setActiveStage', 0)

        setTimeout(() => {
            this.$store.commit('setActiveStage', 1)

        }, 1000); 
    },
    data() {
        return {
            show: false,
            anim: false,
            animDelay: true,
            savings: 0,
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
            }, 150)
            setTimeout(() => {
                this.animDelay = true
            }, 450)

            if(this.activeStage==1.5) {
            setTimeout(() => {
                this.$store.commit('setActiveStage', 2)

            }, 800);
            }

            if(this.activeStage==3) {
            setTimeout(() => {
                this.$store.commit('setActiveStage', 4)

            }, 1500);
            }
            if(this.activeStage==4) {
                this.savings = 2500
            }
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
    transition: all 0.3s ease;
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