<template>
  <div class="flex flex-col w-full items-center" style="font-family: Helvetica,Roboto,Arial,sans-serif; !important">
      
      <div class="flex flex-col w-full min-h-screen">

      
        <NavBar />
        <div class="w-full flex-col flex flex-1 ">

            <Loading :class="activeStage==0 ? ['block'] : ['hidden']" />

            <AppealHeader :class="activeStage>=1 ? 'block' : 'hidden'" :activeStage="activeStage" :savings="activeStage>7 ? savings+savingsExemption : savings" :animDelay="animDelay" />
            
            <div :class="activeStage>=1 ? 'block' : 'hidden'" class="flex-1 overflow-x-hidden overflow-y-hidden relative">
                
                <AppealIntro :activeStage="activeStage" :nextValue="0.5" :prevStage="prevStage" :savings="savings" :animDelay="animDelay"  />
                
                <Loading :class="(activeStage==1.5 && animDelay) ? 'block' : 'hidden'" />

                <div :class="(activeStage==2 && anim) ? ['block', 'z-10'] : (activeStage>2 && animDelay) ? ['hidden'] : (activeStage<2 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==2) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="flex ml-6">
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
                        <div class="flex-1 items-start flex flex-col">
                                <h1 class="text-4xl text-left ">Property Information</h1>
                                <p class="mr-auto font-medium text-gray-500 text-left">We're going to generate an initial estimate of how much you could save, based <br> on recent home sales in your area.</p>


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
                    <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==2) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==2) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                <div :class="(activeStage==3 && animDelay) ? ['block', 'z-10'] : (activeStage>3 && animDelay) ? ['hidden'] : (activeStage<3 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==3 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==3) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        <div  class="sk-fading-circle">
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
                        <h1 class="text-4xl text-left ">Calculating how much you can save...</h1>
                        <p class="font-medium text-gray-500 text-center">It'll only be a moment</p>


                    </div>
                    </div>

                </div>


                <div :class="(activeStage==4 && animDelay) ? ['block', 'z-10'] : (activeStage>4 && animDelay) ? ['hidden'] : (activeStage<4 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==4) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5">
                        <h1 class="text-4xl text font-black text-brand-500">Savings Estimate:</h1>

                        <h1 class="text-6xl ">${{savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} - ${{(savings+800).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h1>
                        <div class="flex -mt-2 justify-center items-center">
                            
                            <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                        </div>


                        <p class="text-xl mt-12 font-medium text-gray-700 text-left">Based on recent home sales, and how much people are saving in your area, we recommend you file an appeal with your local tax assessor to reduce your property taxes</p>
                        <p class="text-xl font-bold mt-6 text-brand-600 text-left">You can save, we can help</p>
                        <p class="text-xl font-medium text-gray-700 text-left">File a property tax appeal with realAppeal and take advantage of our <span class="font-bold font-italics">savings-or-free guarantee.</span> </p>
                        
                        <p class="text-xl mt-6 font-medium text-gray-700 text-left">You only pay us <strong>20%</strong> of whatever we save you - if you don't save money, your appeal is <strong>free.</strong> </p>
                        

                    </div>
                    </div>
                    <div class="h-32 w-3/5 flex mt-auto items-center justify-end relative">
                        <div :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==4) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                

                <div :class="(activeStage==5 && animDelay) ? ['block', 'z-10'] : (activeStage>5 && animDelay) ? ['hidden'] : (activeStage<5 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==5) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="flex w-3/5">
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
                                <h1 class="text-4xl text-left ">You're on your way to savings</h1>
                                <p class="mr-auto font-medium text-gray-500 text-left">In order to generate your appeal, we need to know a little more about you.</p>

                                <div class="w-full mt-6 pr-6 flex flex-col">
                                    <p class="mr-auto font-medium mb-1 text-md text-gray-700">Property address to appeal:</p>
                                    <h1 type="text" class="outline-none text-left appearance-none py-2 px-2 text-md border rounded-md border-gray-400 text-gray-600 bg-gray-200 focus:border-brand-500">1900 Isabel Road Este Boca Raton, FL 33486 </h1>
                                </div>

                                <div class="flex w-full mt-6">
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
                                    <div class="w-full pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Email Address:</p>
                                        <input type="text" class="outline-none appearance-none py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>

                                <div class="flex w-full mt-6">
                                    <div class="w-1/2 pr-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Phone Number:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>

                            </div>
                    </div>
                    
                    </div>
                    <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'pointer-events-none', 'translate-50'] : (prevStage>activeStage && activeStage==5) ? ['opacity-0', 'translate-50m'] : (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==5) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==5) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                


                <div :class="(activeStage==6 && animDelay) ? ['block', 'z-10'] : (activeStage>6 && animDelay) ? ['hidden'] : (activeStage<6 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==6) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-full flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <h1 class="text-4xl text font-black  text-brand-500">Current savings estimate</h1>

                        <h1 class="text-6xl ">${{savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h1>
                        <div class="flex -mt-2 justify-center items-center">
                            
                            <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                        </div>

                        <button @click="$store.commit('setActiveStage', activeStage+1)" class="mt-12 common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 hover:bg-gray-300 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">Check Exemptions</button>
                            <p class="text-center text-sm text-gray-500">(optional)</p>


                        
                        

                    </div>

                     <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==6) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+2)" :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==6) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Finish &amp; Pay</button>
                    </div>
                    </div>

                </div>

                <div :class="(activeStage==7 && animDelay) ? ['block', 'z-10'] : (activeStage>7 && animDelay) ? ['hidden'] : (activeStage<7 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] :  (prevStage>activeStage && activeStage==7) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/4 flex flex-col items-start">
                        <h1 class="text-4xl text-left ">Do any of these situations apply to you?</h1>
                        <p class="mr-auto font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>
                        
                        <div class="flex items-start mt-6">
                            <Selectable @clicked="savingsExemption += 75" @reduce="savingsExemption -= 75" :img="'primary'" :question="'Is this your primary residence?'" class="mx-4"/>
                            <Selectable @clicked="savingsExemption += 75" @reduce="savingsExemption -= 75" :img="'age'" :question="'Are you over the age of 65?'" class="mx-4"/>
                            <Selectable @clicked="savingsExemption += 75" @reduce="savingsExemption -= 75" :img="'usa'" :question="'Are you a veteran?'" class="mx-4"/>
                        </div>
                    </div>
                    </div>
                    <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==7) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==7) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>
            
                <div :class="(activeStage==8 && animDelay) ? ['block', 'z-10'] : (activeStage>8 && animDelay) ? ['hidden'] : (activeStage<8 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==8) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
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
                    <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'pointer-events-none', 'translate-50'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==8) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==8 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==8) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==8) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                <div :class="(activeStage==9 && animDelay) ? ['block', 'z-10'] : (activeStage>9 && animDelay) ? ['hidden'] : (activeStage<9 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==9) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-full flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <h1 class="text-4xl text font-black  text-brand-500">You're doing great, sweetie!</h1>
                        <p class="font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>

                        <h1 class="text-left text-3xl mt-12">The appeal costs $0 to complete. <br> You only pay us when your appeal is successful. <br> You only pay us 20% of your appeal.</h1>
                        <h1 class="text-left text-3xl"></h1>
                        

                        <h1 class="text-6xl mt-16">${{(savings+savingsExemption).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h1>
                        <div class="flex -mt-2 justify-center items-center">
                            
                            <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                        </div>

                        
                        

                    </div>

                     <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==9) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" ::class="(activeStage==9 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==9) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==9) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>
                    </div>

                </div>

                <div :class="(activeStage==10 && animDelay) ? ['block', 'z-10'] : (activeStage>10 && animDelay) ? ['hidden'] : (activeStage<10 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==10 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==10) ? ['opacity-0', 'translate-50m'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-full flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <h1 class="text-4xl text-left ">Authorization of agency</h1>
                        <p class="font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>

                        <button @click="$store.commit('setShowModal', true)" class="mt-20 common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 hover:bg-gray-300 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">View Authorization</button>


                        <div class="items-center mt-6 flex">
                            <div :class="authorized ? ['bg-brand-500'] : ['']" @click="authorized = !authorized" class="w-8 h-8 cursor-pointer common-trans mr-4 rounded border border-gray-500">
                                
                            <svg class="h-full w-full p-1 text-white fill-current" enable-background="new 0 0 515.556 515.556" viewBox="0 0 515.556 515.556"  xmlns="http://www.w3.org/2000/svg"><path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/></svg>
                           
                            </div>
                            <p class="font-normal text-gray-800 ml-4 text-2xl text-left">I hereby authorize realAppeal to represent me <br> as a property tax agent.</p>
                            
                        </div>

                        
                        

                        
                        

                    </div>

                     <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==10 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==10) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==10 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==10) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button v-if="authorized" @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==10 && animDelay) ? ['opacity-50', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==10) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 opacity-100 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                        <button v-else :class="(activeStage==10 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==10) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==10) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-300 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>
                    </div>

                </div>

                <div :class="(activeStage==11 && animDelay) ? ['block', 'z-10'] : (activeStage>11 && animDelay) ? ['hidden'] : (activeStage<11 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==11 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==11) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-full flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <h1 class="text-4xl text-left ">Terms of Servce</h1>
                        <p class="font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>

                        <button @click="$store.commit('setShowModal', true)" class="mt-20 common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 hover:bg-gray-300 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">View Terms</button>


                        <div class="items-center mt-6 flex">
                            <div :class="tosAgreed ? ['bg-brand-500'] : ['']" @click="tosAgreed = !tosAgreed" class="w-8 h-8 cursor-pointer common-trans mr-4 rounded border border-gray-500">
                                
                            <svg class="h-full w-full p-1 text-white fill-current" enable-background="new 0 0 515.556 515.556" viewBox="0 0 515.556 515.556"  xmlns="http://www.w3.org/2000/svg"><path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/></svg>
                           
                            </div>
                            <p class="font-normal text-gray-800 ml-4 text-2xl text-left">I hereby agree to the 20% contingency <br> fee for my property tax savings</p>
                            
                        </div>

                        
                        

                        
                        

                    </div>

                     <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==11 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==11) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==11) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==11 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==11) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==11) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button v-if="tosAgreed" @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==11 && animDelay) ? ['opacity-50', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==11) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==11) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 opacity-100 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                        <button v-else :class="(activeStage==11 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==11) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==11) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-300 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>
                    </div>

                </div>
            
                <div :class="(activeStage==12 && animDelay) ? ['block', 'z-10'] : (activeStage>12 && animDelay) ? ['hidden'] : (activeStage<12 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==12 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==12) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==12) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="flex w-3/5">
                            <!-- <svg version="1.1" class="mr-6 mt-2 h-16 w-16 fill-current text-brand-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,74.667
                                            c67.635,0,122.667,55.031,122.667,122.667S323.635,320,256,320s-122.667-55.031-122.667-122.667S188.365,74.667,256,74.667z
                                            M256,469.333c-69.707,0-131.52-33.755-170.473-85.615c42.676-20.534,103.621-42.385,170.473-42.385
                                            c66.857,0,127.807,21.854,170.474,42.383C387.521,435.577,325.708,469.333,256,469.333z"/>
                                    </g>
                                </g>
                            </svg> -->

                            <div class="flex-1 flex flex-col border border-gray-300 rounded items-center ">
                                <div class="bg-gray-100 py-4 w-full flex flex-col items-center rounded">
                                    <h1 class="text-4xl text-gray-700 text-center w-full ">Secure Payment</h1>
                                    <p class="font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>
                                </div>
                                


                                <div class="flex mt-6 w-full">
                                    <div class="w-1/4 px-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Payment:</p>
                                        <h1 type="text" class="outline-none appearance-none bg-white py-2 px-2 text-xl font-bold text-left rounded-md "> $0 </h1>
                                    </div>
                                </div>
                                <div class="flex mt-6 w-full">
                                    <div class="w-5/6 px-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Credit Card:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                    <div class="w-1/6 px-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">CVV:</p>
                                        <input type="text" class="outline-none appearance-none bg-white py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>

                                <div class="flex w-full mt-6">
                                    <div class="w-1/2 px-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">First Name:</p>
                                        <input type="text" class="outline-none appearance-none py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                    <div class="w-1/2 flex px-6 flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Last Name:</p>
                                        <input type="text" class="outline-none appearance-none py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>
                                
                                <div class="flex w-full mt-6">
                                    <div class="w-full px-6 flex flex-col">
                                        <p class="mr-auto font-medium mb-1 text-md text-gray-700">Billing Address:</p>
                                        <input type="text" class="outline-none appearance-none py-2 px-2 text-md border rounded-md border-gray-400 focus:border-brand-500">
                                    </div>
                                </div>

                                <div @click="hasPaid = !hasPaid" class="flex cursor-pointer px-8 hover:bg-brand-600 items-center justify-center bg-brand-500 rounded my-8">
                                    <svg version="1.1" class="fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        width="401.998px" height="401.998px" viewBox="0 0 401.998 401.998" style="enable-background:new 0 0 401.998 401.998;"
                                        xml:space="preserve">
                                    <g>
                                        <path d="M357.45,190.721c-5.331-5.33-11.8-7.993-19.417-7.993h-9.131v-54.821c0-35.022-12.559-65.093-37.685-90.218
                                            C266.093,12.563,236.025,0,200.998,0c-35.026,0-65.1,12.563-90.222,37.688C85.65,62.814,73.091,92.884,73.091,127.907v54.821
                                            h-9.135c-7.611,0-14.084,2.663-19.414,7.993c-5.33,5.326-7.994,11.799-7.994,19.417V374.59c0,7.611,2.665,14.086,7.994,19.417
                                            c5.33,5.325,11.803,7.991,19.414,7.991H338.04c7.617,0,14.085-2.663,19.417-7.991c5.325-5.331,7.994-11.806,7.994-19.417V210.135
                                            C365.455,202.523,362.782,196.051,357.45,190.721z M274.087,182.728H127.909v-54.821c0-20.175,7.139-37.402,21.414-51.675
                                            c14.277-14.275,31.501-21.411,51.678-21.411c20.179,0,37.399,7.135,51.677,21.411c14.271,14.272,21.409,31.5,21.409,51.675V182.728
                                            z"/>
                                    </g>
                                    </svg>
                                    <h1 class="text-white py-2 ml-4 text-xl">Secure Payment</h1>

                                </div>

                            </div>
                    </div>
                    <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==11 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==12) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==12) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==12 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==12) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==12) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button v-if="hasPaid" @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==12 && animDelay) ? ['opacity-50', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==12) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==12) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 opacity-100 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                        <button v-else :class="(activeStage==12 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==12) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==12) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-300 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>
                    </div>
                    

                </div>

                <div :class="(activeStage==13 && animDelay) ? ['block', 'z-10'] : (activeStage>13 && animDelay) ? ['hidden'] : (activeStage<13 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==13 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==13) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==13) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
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
                    <div class="h-32 w-3/5 flex mt-auto items-center justify-between relative">
                        <div :class="(activeStage==13 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==13) ? ['opacity-0', 'pointer-events-none', 'translate-50'] : (prevStage<activeStage && activeStage==13) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                        <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==13 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==13) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==13) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                        <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==13 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==13) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==13) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                    </div>

                </div>

                 <div :class="(activeStage==14 && animDelay) ? ['block', 'z-10'] : (activeStage>14 && animDelay) ? ['hidden'] : (activeStage<14 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
                
                    <div :class="(activeStage==14 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==14) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==14) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-full flex-1 flex flex-col justify-start mt-16 items-center">
                    <div class="w-3/5 flex flex-col items-center">
                        
                        <svg style="width: 300px !important;" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 94.09">
                            <defs>
                                
                            <mask id="squiggle-mask" maskunits="userSpaceOnUse"
                                        maskcontentunits="userSpaceOnUse">
                                <path id="squiggle-mask-path" class="cls-5 mask" d="M56.26,90.4c-.7-3,10.21-7,10.4-11.46.63-3.89-11.14-7.69-9.57-11.62C59.22,62,67.43,60.8,66.86,55.4s-10-6.59-9.48-10.63c.3-2.59,5.8-5.38,9-8.33a5.79,5.79,0,0,0,1.91-3.54" transform="translate(-2.7 -2.61)"/>
                                </mask>
                                
                                <mask id="left-line-mask" maskunits="userSpaceOnUse" maskcontentunits="userSpaceOnUse">
                                <path id="left-line-mask-path" class="cls-6 mask" d="M25.78,62.5s18.38,14.73,15.9,30.91" transform="translate(-2.7 -2.61)"/>
                                </mask>
                                
                                <mask id="right-line-mask" maskunits="userSpaceOnUse" maskcontentunits="userSpaceOnUse">
                                <path id="right-line-mask-path" class="cls-6 mask" d="M95.12,64.5S78.32,73.83,76.8,94.2" transform="translate(-2.7 -2.61)"/>
                                </mask>
                            </defs>
                            <path id="blue-star" class="cls-1" d="M33.3,51.8a2,2,0,0,0,2-.7l3-3.9,4.9.3a2.38,2.38,0,0,0,1.2-.3,1.34,1.34,0,0,0,.6-.7,2,2,0,0,0-.1-2.1l-2.8-4,1.8-4.6a2,2,0,0,0-.4-2.1,1.92,1.92,0,0,0-2-.6l-4.7,1.4L33,31.3a2,2,0,0,0-2.1-.3,2.15,2.15,0,0,0-1.2,1.8l-.1,4.9-4.1,2.7h0a2,2,0,0,0-.9,1.9A2.1,2.1,0,0,0,25.9,44l4.6,1.6,1.3,4.7A2.07,2.07,0,0,0,33.3,51.8Z" transform="translate(-2.7 -2.61)"/>
                            <path id="yellow-star" class="cls-2" d="M91,32.9l-1.7-4.6A2.1,2.1,0,0,0,87.6,27a2,2,0,0,0-1.9.9L83.2,32l-4.9.2h0a2,2,0,0,0-1.7,1.2,2,2,0,0,0,.3,2.1L80,39.3,78.7,44a1.92,1.92,0,0,0,.6,2,2,2,0,0,0,2.1.4L86,44.6l4.1,2.7a1.8,1.8,0,0,0,1.2.3,1.61,1.61,0,0,0,.9-.3,1.89,1.89,0,0,0,1-1.9l-.3-4.9,3.9-3a1.91,1.91,0,0,0,.7-2A2.07,2.07,0,0,0,96,34Z" transform="translate(-2.7 -2.61)"/>
                            <path id="yellow-burst" class="cls-2" d="M16.1,83.8a2,2,0,0,0,2.5-1.4l.7-2.4,1.8,1.8A2,2,0,1,0,24,79.1l-1.8-1.8,2.5-.6a2,2,0,1,0-.9-3.9l-2.5.6L22,71a2,2,0,1,0-3.9-1.1l-.7,2.4-1.8-1.8a2,2,0,0,0-2.9,2.7L14.5,75l-2.5.6a2,2,0,0,0,.9,3.9l2.5-.6-.7,2.4A2,2,0,0,0,16.1,83.8Z" transform="translate(-2.7 -2.61)"/>
                            <path id="red-burst" class="cls-3" d="M108.8,67.4a2,2,0,0,0-2.5,1.4l-.7,2.4-1.8-1.8a2,2,0,1,0-2.9,2.7l1.8,1.8-2.5.6a2,2,0,0,0,.9,3.9l2.5-.6-.7,2.4a2,2,0,0,0,3.9,1.1l.7-2.4,1.8,1.8a2,2,0,1,0,2.9-2.7l-1.8-1.8,2.5-.6a2,2,0,1,0-.9-3.9l-2.5.6.7-2.4A2.17,2.17,0,0,0,108.8,67.4Z" transform="translate(-2.7 -2.61)"/>
                            <path id="mint-burst" class="cls-4" d="M69.5,7,67,7.6l.7-2.4a2,2,0,0,0-1.4-2.5A1.84,1.84,0,0,0,63.9,4l-.7,2.4L61.4,4.6a2,2,0,0,0-2.8-.1,2,2,0,0,0-.1,2.8l1.8,1.8-2.5.6a2,2,0,0,0-1.5,2.4,2,2,0,0,0,2.4,1.5l2.5-.6-.7,2.4a2,2,0,0,0,3.9,1.1l.7-2.4,1.8,1.8a2,2,0,1,0,2.9-2.7L68,11.5l2.5-.6A2,2,0,0,0,72,8.5,2.06,2.06,0,0,0,69.5,7Z" transform="translate(-2.7 -2.61)"/>  
                            <g id="squiggle" mask="url(#squiggle-mask)">
                                <path class="cls-1" d="M56.3,92.3a2.09,2.09,0,0,0,2.1-2c0-1.6,1.6-2.5,4.1-3.8a18.17,18.17,0,0,0,4.1-2.7,6.44,6.44,0,0,0,2.1-4.6c.1-4-3.2-6-5.8-7.6-2.4-1.5-3.9-2.4-3.9-4s1.6-2.5,4.1-3.8c2.7-1.5,6.1-3.3,6.2-7.3s-3.2-6-5.8-7.6c-2.4-1.5-3.9-2.4-3.9-4s1.6-2.5,4.1-3.8c2.7-1.5,6.1-3.3,6.2-7.3a2.05,2.05,0,0,0-4.1-.1c0,1.6-1.6,2.5-4.1,3.8-2.7,1.5-6.1,3.3-6.2,7.3s3.2,6,5.8,7.6c2.4,1.5,3.9,2.4,3.9,4s-1.6,2.5-4.1,3.8c-2.7,1.5-6.1,3.3-6.2,7.3s3.2,6,5.8,7.6c2.4,1.5,3.9,2.4,3.9,4s-1.6,2.5-4.1,3.8c-2.7,1.5-6.1,3.3-6.2,7.3A2,2,0,0,0,56.3,92.3Z" transform="translate(-2.7 -2.61)"/>
                            </g>
                            <g id="right-line" mask="url(#right-line-mask)">
                                <path class="cls-1" d="M94.7,64.5a2,2,0,0,0-2.8-.4c-15.9,11.6-17,27.4-17,28a2,2,0,0,0,1.9,2.1,2.46,2.46,0,0,0,1.5-.5,1.61,1.61,0,0,0,.6-1.3c0-.1,1-14.6,15.4-25A2.07,2.07,0,0,0,94.7,64.5Z" transform="translate(-2.7 -2.61)"/>
                            </g>
                            <g id="left-line" mask="url(#left-line-mask)">
                                <path class="cls-1" d="M35.8,73.3l.2-.2a2,2,0,0,0,.2-2.6A43.54,43.54,0,0,0,29.4,63a1.94,1.94,0,0,0-2.8.2,2,2,0,0,0,.2,2.8A44.29,44.29,0,0,1,33,72.8,2,2,0,0,0,35.8,73.3Z" transform="translate(-2.7 -2.61)"/>
                                <path class="cls-4" d="M41.8,94.4a2.05,2.05,0,0,0,2-2,35.88,35.88,0,0,0-3.3-14.5,2,2,0,0,0-3.6,1.6,32.83,32.83,0,0,1,3,12.7A1.93,1.93,0,0,0,41.8,94.4Z" transform="translate(-2.7 -2.61)"/>
                            </g>
                            
                            <circle id="blue-dot-3" class="cls-1 dot left-side" cx="2" cy="89.29" r="2"/>
                            <circle id="red-dot-4" class="cls-3 dot left-side" cx="24.6" cy="89.79" r="2"/>
                            <circle id="blue-dot-4" class="cls-1 dot" cx="121" cy="86.49" r="2"/>
                            <circle id="blue-dot-5" class="cls-1 dot left-side" cx="42.3" cy="61.89" r="2"/>
                            <circle id="yellow-dot" class="cls-2 dot left-side" cx="31.1" cy="55.99" r="2"/>
                            <circle id="red-dot-1" class="cls-3 dot" cx="63" cy="25.59" r="2"/>
                            <circle id="mint-dot-1" class="cls-4 dot left-side" cx="43.2" cy="22.29" r="2"/>
                            <circle id="mint-dot-2" class="cls-4 dot" cx="96.3" cy="54.69" r="2"/>
                            <circle id="blue-dot-1" class="cls-1 dot" cx="84.3" cy="82.79" r="2"/>
                            <circle id="red-dot-2" class="cls-3 dot left-side" cx="17" cy="52.79" r="2"/>
                            <circle id="red-dot-3" class="cls-3 dot" cx="70.3" cy="73.89" r="2"/>
                            <circle id="blue-dot-2" class="cls-1 dot" cx="79.3" cy="54.29" r="2"/>
                            
                            </svg>

                        <h1 class="text-4xl text font-black  text-brand-500">Congratulations!</h1>
                        <p class="font-normal text-gray-800 ml-4 text-2xl text-left">We'll contact you within the next 7-10 business days with the result of your appeal.</p>


                        <h1 class="text-4xl text font-black mt-12  text-brand-500">Savings estimate</h1>

                        <h1 class="text-6xl ">${{savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</h1>

                        <rounter-link class="w-full justify-center" to="/">
                            <button class="mt-20 common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 hover:bg-gray-300 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">Go Home</button>
                            
                        </rounter-link>
                        
                        

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
            authorized: false,
            tosAgreed: false,
            hasPaid: false,
            anim: false,
            animDelay: true,
            savings: 0,
            savingsExemption: 0,
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



      .cls-1 {
        fill: #2c51a3;
      }

      .cls-2 {
        fill: #faaf4c;
      }

      .cls-3 {
        fill: #f16279;
      }

      .cls-4 {
        fill: #78c8aa;
      }

      .cls-5 {
        fill: none;
        stroke-width: 6px;
      }

      .cls-5, .cls-6 {
        stroke: #000;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
      
      .mask {        
        fill: black;
        stroke: white;
        stroke-width: 5px;
      }
      
      #squiggle-mask-path {
        stroke-dasharray: 80;
        stroke-dashoffset: 80;
        animation: animate-stroke 1s 0.1s forwards cubic-bezier(0,1,.53,1);
      }
      
      #left-line-mask-path {
        stroke-dasharray: 38;
        stroke-dashoffset: -38;
        animation: animate-stroke 1s 0.2s forwards cubic-bezier(0,1,.53,1);
      }
      
      #right-line-mask-path {
        stroke-dasharray: 38;
        stroke-dashoffset: -38;
        animation: animate-stroke 1s 0.2s forwards cubic-bezier(0,1,.53,1);
      }
      
      @keyframes animate-stroke {
        100% {
          stroke-dashoffset: 0;
        }
      }
      
      
      #mint-burst {
        transform: translateY(70px);
        animation: move-stars 1s 0.5s forwards cubic-bezier(0,1,.53,1);
      }
      
      #yellow-burst {
        transform: translate(40px, 10px);
        animation: move-stars 1s 0.5s forwards cubic-bezier(0,1,.53,1);
      }
      
      #red-burst {
        transform: translate(-40px, 10px);
        animation: move-stars 1s 0.5s forwards cubic-bezier(0,1,.53,1);
      }
            
      #blue-star {
        transform: translate(10px, 40px);
        animation: move-stars 1s 0.5s forwards cubic-bezier(0,1,.53,1);
        display: inherit;
      }
      
      #yellow-star {
        transform: translate(-10px, 45px);
        animation: move-stars 1s 0.5s forwards cubic-bezier(0,1,.53,1);
      }
      
      @keyframes move-stars {
        100% {
          transform: translateY(0);
        }
      }

      .dot {
        animation: reveal-dots 0.9s 1.2s both cubic-bezier(0,1,.53,1);
        opacity: 0;
        transform: translate(-5px, 10px);
        
      }
      
      .dot.left-side {
        transform: translate(5px, 10px);
      }
      
      @keyframes reveal-dots {
        100% {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
</style>