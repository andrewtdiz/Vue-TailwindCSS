<template>
  <div class="flex flex-col justify-center overflow-x-hidden cursor-pointer py-2 relative" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <p class="select-none font-normal text-md" :class="hovering ? 'text-black' : 'text-gray-700'">{{label}}</p>
        <div class="absolute mt-3 bg-brand-500 animate-nav" style="height: 3px; left: -5px; transform: translateX(-5%);" :style="{width: hovering ? '75px' : '0px'}">

        </div>

        
    </div>
</template>

<script>
export default {
    props: ['label'],
    data() {
        return { 
            hovering: false,
        }    
    }
}
</script>

<style>
.animate-nav {
    transition: all 0.3s;
}
</style>