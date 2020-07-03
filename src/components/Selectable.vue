<template>
  <div @click="selected = selected==0 ? 1 : 0" :class="selected==1 ? ['bg-white', ' border-brand-400'] : ['card-4', 'border-transparent' ]" class="w-56 h-56 rounded-lg cursor-pointer flex flex-col border-2">
    
    <div v-if="img=='primary'" class="flex flex-col justify-end relative" style="height: 60%">
        <img v-if="selected==0" src="../assets/house.png" class="w-2/5 h-auto mx-auto select-none" alt="">
        <img :class="(selected==1) ? ['block', 'check-trans', 'w-2/5'] : ['hidden']" src="../assets/checkmark.png" class=" select-none mx-auto " style="top:0%; left: 0%;" alt="">
    </div>
     <div v-if="img=='age'" class="flex flex-col justify-end relative" style="height: 60%">
        <img v-if="selected==0" src="../assets/old.png" class="w-2/5 h-auto mx-auto select-none" alt="">
        <img :class="(selected==1) ? ['block', 'check-trans', 'w-2/5'] : ['hidden']" src="../assets/checkmark.png" class=" select-none mx-auto " style="top:0%; left: 0%;" alt="">
    </div>
    <div v-if="img=='usa'" class="flex flex-col justify-end relative" style="height: 60%">
        <img v-if="selected==0" src="../assets/usa.png" class="w-2/5 h-auto mx-auto select-none" alt="">
        <img :class="(selected==1) ? ['block', 'check-trans', 'w-2/5'] : ['hidden']" src="../assets/checkmark.png" class=" select-none mx-auto " style="top:0%; left: 0%;" alt="">
    </div>
    <div class="flex-1 flex flex-col mt-2">
        <p class="px-4 text-lg font-medium select-none " style="cursor: pointer; user-select: none !important"> {{question}}</p>

    </div>

  </div>
</template>

<script>
export default {
    props: ['img', 'question'],
    data() {
        return {
            selected: 0,
            anim: false
        }
    },
    watch: {
        selected() {
            if(this.selected) {
            this.$emit('clicked')
            } else {
                this.$emit('reduce')
            }
            this.anim = false
            setTimeout(() => {
                this.anim = true
            }, 100);
        }
    }
}
</script>

<style scoped>


.check-trans {
    animation-name: expand;
    animation-timing-function: ease;
    animation-duration: 0.3s;
}

@keyframes expand {
        0%   { transform: scale(0.2); }
        50%  { transform: scale(1.3); }
        100% { transform: scale(1);   }
    }

.card-4 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-4:hover {
  box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
}

</style>