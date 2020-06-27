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
                        <p v-if="savings=='' && activeStage<6 && animDelay" class="font-bold text-3xl">$ N/A</p>
                        <p v-else class="common-trans font-bold text-3xl">$ {{savings=='' ? 'N/A' : savings}}</p>
                        
                    </div>
                    <div class="ml-auto w-1/5 flex cursor-pointer hover:text-black items-center">

                        <svg class="h-6 w-6 fill-current mr-2 text-brand-500" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M509.989 463.655L474.84 361.362C491.746 327.189 500.687 289.097 500.747 250.77C500.849 184.768 475.312 122.36 428.838 75.0429C382.356 27.7179 320.417 1.07988 254.432 0.0328846C219.861 -0.522115 186.315 5.84788 154.675 18.9449C124.158 31.5769 96.7911 49.8759 73.3351 73.3329C49.8781 96.7889 31.5791 124.156 18.9471 154.673C5.84809 186.313 -0.514911 219.876 0.033089 254.43C1.07809 320.415 27.7171 382.354 75.0411 428.836C122.265 475.219 184.513 500.748 250.373 500.747C250.501 500.747 250.638 500.747 250.767 500.747C289.095 500.688 327.186 491.747 361.361 474.84L463.654 509.989C467.588 511.341 471.62 512 475.608 512C485.083 512 494.298 508.277 501.287 501.288C511.219 491.358 514.553 476.938 509.989 463.655ZM247.909 393.103C239.4 393.103 233.099 386.148 232.731 377.925C232.364 369.728 239.97 362.747 247.909 362.747C256.418 362.747 262.719 369.702 263.087 377.925C263.455 386.121 255.848 393.103 247.909 393.103ZM263.087 277.171V325.43C263.087 333.812 256.291 340.608 247.909 340.608C239.527 340.608 232.731 333.812 232.731 325.43V263.525C232.731 255.143 239.527 248.347 247.909 248.347C272.809 248.347 293.068 228.088 293.068 203.188C293.068 178.288 272.809 158.029 247.909 158.029C223.009 158.029 202.75 178.288 202.75 203.188C202.75 211.57 195.954 218.366 187.572 218.366C179.19 218.366 172.394 211.57 172.394 203.188C172.394 161.55 206.27 127.673 247.909 127.673C289.547 127.673 323.424 161.549 323.424 203.188C323.424 239.63 297.477 270.126 263.087 277.171Z"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="512" height="512" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p class="cursor-pointer">Help</p>
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
                <div class="h-32 w-3/4 flex mt-auto items-center justify-end relative">
                    <div :class="(activeStage==1 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==1) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                    <button @click="$store.commit('setActiveStage', activeStage+0.5)" :class="(activeStage==1 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==1) ? ['opacity-0', 'translate-50'] : ['opacity-0', 'translate-50m']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                </div>

            </div>

            <div :class="(activeStage==1.5 && animDelay) ? 'block' : 'hidden'" class="flex-1 overflow-x-hidden relative">
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
            </div>

            <div :class="(activeStage==2 && anim) ? ['block', 'z-10'] : (activeStage>2 && animDelay) ? ['hidden'] : (activeStage<2 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==2 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==2) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==2) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                   <div class="flex w-1/2">
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
                            <h1 class="text-4xl text-left font-bold ">Basic Information</h1>
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

            <div :class="(activeStage==3 && animDelay) ? ['block', 'z-10'] : (activeStage>2 && animDelay) ? ['hidden'] : (activeStage<2 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==3 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==3) ? ['opacity-0', 'translate-50'] :  (prevStage>activeStage && activeStage==3) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                   <div class="w-3/4 flex flex-col items-start">
                    <h1 class="text-4xl text-left font-bold ">Do any of these situations apply to you?</h1>
                    <p class="mr-auto font-medium text-gray-500 text-left">Lorem ipsum dolor simet et al, pellentesque eleifend</p>
                    <!-- <div class="flex flex-col items-stretch">
                        <div class="h-8 flex items-center w-full">
                            
                            <AppealToggle/>
                            <p class="ml-4 text-lg"> <span class="font-bold">Personal exemption -</span> Is this your personal residence?</p>
                        </div>
                    </div>
                    <div class="flex flex-col mt-5 items-stretch">
                        <div class="h-8 flex items-center w-full">
                            <AppealToggle/>

                            <p class="ml-4 text-lg"> <span class="font-bold">Military exemption -</span> Are you a veteran?</p>
                        </div>
                    </div>
                    <div class="flex flex-col mt-5 items-stretch">
                        <div class="h-8 flex items-center w-full">
                            <AppealToggle/>
                            <p class="ml-4 text-lg"> <span class="font-bold">Senior Citizen exemption -</span> Are you over the age of 65?</p>
                        </div>
                    </div> -->
                    <div class="flex items-start mt-6">
                        <Selectable :img="'primary'" :question="'Is this your primary residence?'" class="mx-4"/>
                        <Selectable :img="'age'" :question="'Are you over the age of 65?'" class="mx-4"/>
                        <Selectable :img="'usa'" :question="'Are you a veteran?'" class="mx-4"/>
                    </div>
                   </div>
                </div>
                <div class="h-32 w-3/4 flex mt-auto items-center justify-between relative">
                    <div :class="(activeStage==3 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==3) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage) ? ['opacity-0', 'translate-50m', 'pointer-events-none'] : ['pointer-events-none', 'opacity-0', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                    <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==3 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==3) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==3) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                    <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==3 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==3) ? ['opacity-0', 'translate-50'] : (prevStage>activeStage && activeStage==3) ? ['opacity-0', 'translate-50m'] :   (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                </div>

            </div>

            <div :class="(activeStage==4 && animDelay) ? ['block', 'z-10'] : (activeStage>4 && animDelay) ? ['hidden'] : (activeStage<4 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
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
                            <h1 class="text-4xl text-left font-bold ">Contact Information</h1>
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
                    <div :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                    <button @click="$store.commit('setActiveStage', activeStage-1)" :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-gray-200 text-gray-700 hover:text-gray-800 text-left mt-4 px-12 py-2 rounded">&lt Back</button>
                    <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==4 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50'] : (prevStage<activeStage && activeStage==4) ? ['opacity-0', 'translate-50m'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Continue</button>
                </div>

            </div>

            <div :class="(activeStage==5 && animDelay) ? ['block', 'z-10'] : (activeStage>5 && animDelay) ? ['hidden'] : (activeStage<5 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==5 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==5) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                   <div class="w-3/5">
                    <h1 class="text-4xl text-left font-bold ">Calculating how much you can save...</h1>
                    <p class="mr-auto font-medium text-gray-500 text-left">It'll only be a moment</p>


                   </div>
                </div>

            </div>


            <div :class="(activeStage==6 && animDelay) ? ['block', 'z-10'] : (activeStage>6 && animDelay) ? ['hidden'] : (activeStage<6 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                   <div class="w-3/5">
                    <h1 class="text-4xl text font-black text-brand-500">We estimate your savings will be</h1>

                    <h1 class="text-6xl font-bold ">${{savings}}</h1>
                    <div class="flex -mt-2 justify-center items-center">
                        
                        <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                    </div>


                    <p class="text-2xl font-medium text-gray-800 text-center mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                    
                    

                   </div>
                </div>
                <div class="h-32 w-3/4 flex mt-auto items-center justify-end relative">
                    <div :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'pointer-events-none', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'pointer-events-none', 'translate-50m'] : ['opacity-0', 'pointer-events-none', 'translate-50']"  class="absolute top-0 bg-gray-300 w-full" style="height: 3px;"></div>
                    <button @click="$store.commit('setActiveStage', activeStage+1)" :class="(activeStage==6 && animDelay) ? ['opacity-100', 'translate-0', 'z-20'] : (prevStage<activeStage && activeStage==6) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']" class="common-trans text-2xl font-medium title-font bg-brand-500 hover:bg-brand-600 text-white text-left mt-4 px-12 py-2 rounded">Finalize</button>
                </div>

            </div>


            <div :class="(activeStage==7 && animDelay) ? ['block', 'z-10'] : (activeStage>7 && animDelay) ? ['hidden'] : (activeStage<7 && animDelay) ? 'hidden' : 'block'" class="absolute h-full w-full flex flex-col items-center">
               
                <div :class="(activeStage==7 && animDelay) ? ['opacity-100', 'translate-0'] : (prevStage<activeStage && activeStage==7) ? ['opacity-0', 'translate-50'] :  (prevStage<activeStage) ? ['opacity-0', 'translate-50m'] : ['opacity-0', 'translate-50']"  class="common-trans w-3/4 flex-1 flex flex-col justify-start mt-16 items-center">
                   <div class="w-3/5">
                    <h1 class="text-5xl text font-black text-brand-500">Thank you</h1>

                    <p class="text-xl font-medium text-gray-800 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                    
                    <h1 class="text-xl text font-black mt-12 text-brand-500">We estimate your savings will be</h1>

                    <h1 class="text-5xl font-bold ">${{savings}}</h1>
                    <div class="flex -mt-2 justify-center items-center">
                        
                        <p class="text-md font-medium text-brand-500 cursor-pointer hover:underline text-center">How did we calculate this?</p>

                    </div>


                    
                    

                   </div>
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
import AppealToggle from '../components/AppealToggle.vue'
import Selectable from '../components/Selectable.vue'

export default {
    components: {
        NavBar,
        AppealToggle,
        Selectable
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
            savings: '',
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

            if(this.activeStage==5) {
            setTimeout(() => {
                this.$store.commit('setActiveStage', 6)

            }, 1500);
            }
            if(this.activeStage==6) {
                this.savings = '2,543'
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