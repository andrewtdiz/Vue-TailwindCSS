<template>
  <div class="flex flex-col w-full items-center">
      
      <div class="flex flex-col w-full h-screen ">

      
        <NavBar />
        
        <div class="flex flex-col mx-auto items-center container py-8">
            <h2 class="sm:text-3xl md:w-3/4 md:px-6 text-2xl text-center title-font text-gray-800 font-bold" style="cursor: pointer !important">Recent News and Happenings</h2>

        </div>

        <section v-for="(blog, ind) in posts" :key="ind" class="text-gray-700 body-font overflow-hidden">
            <div class="container px-5 pb-6 mx-auto">
                <div class="flex md:justify-center flex-wrap -m-12">
                <div class="p-12 md:w-3/4 flex flex-col items-start">
                    <div class="flex">
                        <span v-for="(category, ind2) in blog.categories" :key="ind2+100" class="inline-block py-1 px-3 mr-2 rounded bg-brand-100 text-brand-600 text-sm font-medium tracking-widest">{{category}}</span>

                    </div>
                    <router-link class="" :to="'/blog/'+blog.id">
                        <h2 class="sm:text-3xl text-2xl title-font text-brand-700 text-left hover:text-brand-800 font-bold mt-4 " style="cursor: pointer !important">{{blog.title}}</h2>
                    </router-link>
                    <p class="text-md font-medium text-left mt-1 mb-4">Last updated: <span class="font-normal">{{blog.date}}</span> </p>

                    <p class="leading-relaxed text-left mb-6">{{blog.desc}}</p>
                    <div class="flex items-center flex-wrap pb-8 mb-4 border-b-2 border-gray-200 mt-auto w-full">
                        <!-- <a class="text-brand-500 inline-flex items-center">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a> -->
                        <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                        <span class="flex-grow flex flex-col pl-4">
                            <span class="title-font font-medium text-gray-900">{{blog.username}}</span>
                            <span class="text-gray-500 text-left text-sm">{{blog.usertitle}}</span>
                        </span>
                        </a>
                        
                        <span class="text-gray-600 mr-3 inline-flex ml-auto items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>{{blog.views}}
                        </span>
                        <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>{{blog.comments}}
                        </span>
                    </div>
                    
                </div>
                </div>
            </div>
        </section>
      
      </div>

      
    
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'


export default {
    data() {
        return {
            posts: [],
        }
    },
  components: {
    NavBar,
  },
  created() {
      this.posts = this.$store.state.blogPosts

  },
  computed: {
      blogPosts() {
          this.$store.state.blogPosts
      },
  },
}
</script>


<style scoped>
.background-img{
  background: url("../assets/sanfran.png") top right no-repeat;
  background-attachment: fixed;
  background-size: 85%;
  background-position: 70% 80%;
}

.side-shadow{
  box-shadow: 0 0px 20px 0 rgba(0,0,0,.4)
}
</style>
