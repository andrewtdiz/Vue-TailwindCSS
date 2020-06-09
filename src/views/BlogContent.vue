<template>
  <div class="flex flex-col w-full items-center">
      
      <div class="flex flex-col w-full h-screen ">

      
        <NavBar />
        
        <div class="flex flex-col items-start container py-3">
            <router-link class="flex text-gray-700 hover:text-black items-center mx-8 px-4 " to="/blog/">
                <svg version="1.1" class="fill-current mr-3 rotate-180 h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; transform: rotate(180deg)" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                                c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                                l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                                c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/>
                        </g>
                    </g>
                </svg>
                <div class="mr-auto py-2">Back to Blog</div>
            </router-link>
            
        </div>

        <section class="text-gray-700 body-font overflow-hidden">
            <div class="container px-5 pb-6 mx-auto">
                <div class="flex md:justify-center flex-wrap -m-12">
                <div class="p-12 md:w-3/4 flex flex-col items-start">
                    <div class="flex">
                        <span v-for="(category, ind2) in post.categories" :key="ind2+100" class="inline-block py-1 px-3 mr-2 rounded bg-brand-100 text-brand-500 text-sm font-medium tracking-widest">{{category}}</span>

                    </div>
                    <h2 class="sm:text-3xl text-2xl title-font text-left text-gray-800 font-bold mt-4 " style="cursor: pointer !important">{{post.title}}</h2>

                    <p class="text-md font-medium text-left mt-1 mb-4">Last updated: <span class="font-normal">{{post.date}}</span> </p>

                    <div class="flex items-center flex-wrap pt-4 pb-2 mb-4 border-b-2 border-gray-200 mt-auto w-full">
                        <!-- <a class="text-brand-500 inline-flex items-center">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a> -->
                        <a class="inline-flex items-center">
                        <img alt="post" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                        <span class="flex-grow flex flex-col pl-4">
                            <span class="title-font font-medium text-gray-900">{{post.username}}</span>
                            <span class="text-gray-500 text-left text-sm">{{post.usertitle}}</span>
                        </span>
                        </a>
                        
                        <span class="text-gray-600 mr-3 inline-flex ml-auto items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>{{post.views}}
                        </span>
                        <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>{{post.comments}}
                        </span>
                    </div>

                    <p class="leading-relaxed text-left mb-6">{{post.content}}</p>
                    
                    
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
            post: {}
        }
    },
  components: {
    NavBar,
  },
  created() {
      window.console.log(this.$route.params.id)
      for(let i=0; i< this.$store.state.blogPosts.length; i++) {
          if(this.$store.state.blogPosts[i].id == this.$route.params.id) this.post = this.$store.state.blogPosts[i]
      }

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
