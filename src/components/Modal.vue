<template>
  <div class="w-screen h-screen flex fixed z-20 flex-col justify-center items-center" v-if="showModal">
      <div class="w-full h-full absolute top-0 left-0" style="background: rgba(0,0,0,0.4)" @click="$store.commit('setShowModal', false)"></div>
      <div class="bg-white w-1/2 z-50 rounded-lg flex flex-col p-6" >
        <h1 class="text-3xl font-bold w-full text-left">Authorization </h1>
        <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit justo, accumsan dignissim dapibus et, fermentum vel sapien. Duis ultrices rhoncus erat et imperdiet. Vestibulum quis facilisis nibh. Vestibulum interdum nec enim vel dictum. Fusce commodo sit amet massa vel tincidunt. Nunc luctus egestas mi. Praesent urna nisi, facilisis non scelerisque et, posuere ut felis. Curabitur nec enim eu nunc finibus tincidunt. Curabitur sit amet malesuada urna. In consectetur mauris quis magna ornare pulvinar. Nunc eget metus in est finibus vulputate. Sed elit lacus, cursus non sollicitudin vel, egestas at erat. <br> <br>

Donec in volutpat sem. Donec varius aliquet laoreet. Sed fringilla mattis est, vel sollicitudin enim tincidunt quis. Quisque augue nibh, tincidunt nec maximus sit amet, faucibus nec augue. Vivamus diam libero, viverra eu metus a, pulvinar volutpat purus. Fusce condimentum ligula dui, at consequat turpis dictum vel. Cras sodales tortor magna, vel venenatis metus egestas vitae. Donec ullamcorper erat et volutpat porttitor. <br> <br>

Pellentesque sit amet finibus magna. Aenean vel semper justo. Nam non volutpat mauris, et ornare elit. Fusce feugiat ultrices viverra. Quisque condimentum ac purus a porttitor. Duis nibh leo, porta a nisi non, auctor tincidunt mauris. Integer non lacinia augue. Nam iaculis lobortis feugiat. Curabitur euismod efficitur vestibulum. Vivamus ipsum neque, sagittis quis massa at, placerat bibendum elit. Praesent porttitor tristique ex at facilisis. Etiam id lacinia tellus. In mauris felis, bibendum in viverra sed, cursus vitae libero. <br> <br>

Etiam vulputate semper nunc non tempor. Maecenas euismod lectus ac tincidunt pharetra. Duis enim erat, vehicula eget pellentesque vel, porta ut diam. Duis tempor, libero non tincidunt commodo, ante urna pellentesque velit, vel luctus velit odio in arcu. Proin non nulla quam. Duis vitae odio massa. Curabitur lobortis risus ante, sit amet finibus massa congue quis.

Sed vehicula aliquet eros non malesuada. Nam gravida nibh porta laoreet eleifend. Praesent non nisi sit amet turpis mollis semper. Aenean pellentesque eget magna non egestas. Sed pretium dolor et auctor rhoncus. Fusce in scelerisque tortor. Nulla a ipsum ipsum. Integer vel lacinia dui. Proin pulvinar dolor quis erat condimentum, vitae finibus justo sodales. Integer vel ornare felis. Cras tincidunt vel odio vitae bibendum. Suspendisse hendrerit efficitur ex, non mollis purus elementum eu.</p>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        showModal() {
            return this.$store.getters.getShowModal
        },
    }
}
</script>

<style>

</style>