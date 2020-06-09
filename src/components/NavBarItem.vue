<template>
  <div class="flex flex-col justify-center overflow-x-hidden cursor-pointer py-2 relative" style="cursor: pointer !important" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <p class="select-none font-medium text-lg" style="cursor: pointer !important" :class="$router.currentRoute.path==route ? 'text-black' : hovering ? 'text-black' : 'text-gray-800'">{{label}}</p>
        <div class="absolute mt-3 bg-brand-500 animate-nav" style="height: 3px; left: -5px; transform: translateX(-5%);" :style="{width: $router.currentRoute.path==route ? '75px' : hovering ? '75px' : '0px'}">

        </div>

        
    </div>
</template>

<script>
export default {
    props: ['label', 'route'],
    data() {
        return { 
            hovering: false,
        }    
    },
    created() {
        window.console.log(this.$router.currentRoute)
    },
}
</script>

<style>
.animate-nav {
    transition: all 0.3s;
}
</style>