<template>
  <div class="flex w-full">
                <div class="mx-auto  mt-4  h-16 border-b border-gray-300 flex justify-center items-center w-3/4">
                    <div class="flex mr-2 w-1/5 flex-col items-end">
                        <p class="font-medium">ESTIMATED SAVINGS: </p>
                        <p class="font-medium text-gray-500">(in progress)</p>
                        
                    </div>
                    <div class="flex flex-col flex-1 ml-2 justify-center items-start">
                        <p v-if="savings=='' && activeStage<6 && animDelay" class="font-bold text-2xl">$ N/A</p>
                        <p v-else class="common-trans font-bold text-2xl">$ {{savings=='' ? 'N/A' : (savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' - ' + (savings+800).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}}</p>
                        
                    </div>

                    <div class="w-1/5 flex cursor-pointer hover:text-black items-center">

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
</template>

<script>
export default {
    props: ['activeStage', 'savings', 'animDelay']
}
</script>

<style>

</style>