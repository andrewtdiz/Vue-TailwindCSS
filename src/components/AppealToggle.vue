<template>
    <div class="flex items-stretch h-full w-20">
        <div @click="clicked = (clicked==1) ? -1 : 1" :class="clicked==1 ? 'bg-brand-500' : 'hover:bg-gray-100'" class="w-8 cursor-pointer h-full border border-gray-300 rounded">
            <svg :class="clicked==1 ? ['block', 'bg-brand-500'] : 'hidden'" class="h-full w-full p-1 fill-current text-white" viewBox="0 0 417 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M159.677 364.278C155.696 368.282 150.266 370.516 144.624 370.516C138.983 370.516 133.552 368.282 129.571 364.278L9.35675 244.044C-3.11892 231.568 -3.11892 211.338 9.35675 198.886L24.4094 183.829C36.889 171.354 57.0957 171.354 69.5713 183.829L144.624 258.886L347.428 56.0784C359.907 43.6028 380.134 43.6028 392.59 56.0784L407.642 71.135C420.118 83.6107 420.118 103.837 407.642 116.293L159.677 364.278Z"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="417" height="417" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div @click="clicked = (clicked==0) ? -1 : 0" :class="clicked==0 ? 'bg-brand-500' : 'hover:bg-gray-100'" class="w-8 cursor-pointer ml-3 h-full border border-gray-300 rounded">
            <svg :class="clicked==0 ? ['block', 'bg-brand-500'] : 'hidden'" class="h-full w-full p-1 fill-current text-white" viewBox="0 0 417 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M159.677 364.278C155.696 368.282 150.266 370.516 144.624 370.516C138.983 370.516 133.552 368.282 129.571 364.278L9.35675 244.044C-3.11892 231.568 -3.11892 211.338 9.35675 198.886L24.4094 183.829C36.889 171.354 57.0957 171.354 69.5713 183.829L144.624 258.886L347.428 56.0784C359.907 43.6028 380.134 43.6028 392.59 56.0784L407.642 71.135C420.118 83.6107 420.118 103.837 407.642 116.293L159.677 364.278Z"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="417" height="417" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            clicked: -1,
        }
    }
}
</script>

<style>

</style>