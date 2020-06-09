import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogPosts: [
      {
        id: 'DidYouKnow',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: 'Cras nec dolor et enim mattis porta. Morbi consectetur, mauris nec tincidunt tempus, ligula neque vestibulum lectus, congue dapibus neque elit et magna. Morbi id odio auctor, feugiat nunc sed, faucibus ligula. Praesent urna leo, consequat eget neque a, ornare tincidunt ante. ',
        categories: ['Lorem Ipsum', 'Dolor sit'],
        date: 'June 8th, 2020',
        views: '1.2k',
        comments: '6',
        username: 'Holden Caulfield',
        usertitle: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor et enim mattis porta. Morbi consectetur, mauris nec tincidunt tempus, ligula neque vestibulum lectus, congue dapibus neque elit et magna. Morbi id odio auctor, feugiat nunc sed, faucibus ligula. Praesent urna leo, consequat eget neque a, ornare tincidunt ante. Nunc aliquam feugiat risus, ut ornare sem aliquet et. Integer lacinia risus dapibus elit sodales mattis. Cras porta tempus ex, sed laoreet leo laoreet vel. Morbi nec mauris et est blandit pharetra quis a erat. Nulla arcu ex, tempor sit amet ultricies sed, rhoncus at diam. Morbi lacinia sodales sodales. Nullam neque felis, tincidunt faucibus turpis eu, vulputate dignissim dolor. Curabitur rutrum varius justo, mollis mattis leo feugiat vitae. Aenean nisi massa, pretium maximus feugiat non, aliquam ut metus. Duis sapien nibh, feugiat tristique velit ac, efficitur interdum lorem. Maecenas molestie pulvinar nunc ac suscipit. Phasellus vel dapibus massa. Nulla sit amet cursus nunc. Curabitur consequat quam mi, eu finibus risus scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac diam mauris. Pellentesque et tincidunt mi, ac semper ipsum. Duis ut ornare ante, eget varius odio. Vivamus arcu mauris, faucibus non risus sed, pulvinar lacinia leo. Proin pharetra arcu gravida mauris mattis rhoncus. Nunc id orci vel quam varius suscipit et eu enim. Cras commodo sit amet risus eget porttitor. Etiam dignissim nec ligula rutrum bibendum. Quisque sodales dolor dictum ullamcorper maximus. Curabitur laoreet egestas feugiat. Aliquam turpis nulla, posuere non massa at, varius auctor enim. Mauris arcu libero, finibus laoreet commodo id, volutpat eu purus. Quisque quis dolor tempor, interdum nisl id, feugiat eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque semper urna ac augue tristique aliquam. Vestibulum auctor imperdiet auctor. Integer feugiat quis ipsum et bibendum. Praesent eu lacus id nunc dictum consequat. Etiam sapien elit, fermentum a elit ut, scelerisque pulvinar metus. Nullam aliquet, augue in semper pulvinar, augue lectus dapibus risus, sed vehicula turpis enim ut orci. Sed vehicula tempor neque, mattis blandit purus tristique ac. Suspendisse tristique justo nec erat cursus molestie. Integer a facilisis dui. Sed venenatis diam a metus efficitur, sit amet iaculis odio lacinia. Etiam eleifend accumsan molestie. Donec pulvinar massa vitae maximus scelerisque. Nulla facilisi. Proin vel elit vitae felis maximus efficitur eu a ante. Nullam eros leo, volutpat et efficitur vel, condimentum vel ex. Mauris interdum, urna at venenatis egestas, sem urna ultrices quam, eget convallis diam lacus ullamcorper tellus. Nulla pellentesque metus id sem rutrum, ut consectetur nunc vehicula.',
      },
      {
        id: 'MyFirstAppeal',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: 'Cras nec dolor et enim mattis porta. Morbi consectetur, mauris nec tincidunt tempus, ligula neque vestibulum lectus, congue dapibus neque elit et magna. Morbi id odio auctor, feugiat nunc sed, faucibus ligula. Praesent urna leo, consequat eget neque a, ornare tincidunt ante. ',
        categories: ['Lorem Ipsum', 'Dolor sit'],
        date: 'June 8th, 2020',
        views: '1.2k',
        comments: '6',
        username: 'Holden Caulfield',
        usertitle: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor et enim mattis porta. Morbi consectetur, mauris nec tincidunt tempus, ligula neque vestibulum lectus, congue dapibus neque elit et magna. Morbi id odio auctor, feugiat nunc sed, faucibus ligula. Praesent urna leo, consequat eget neque a, ornare tincidunt ante. Nunc aliquam feugiat risus, ut ornare sem aliquet et. Integer lacinia risus dapibus elit sodales mattis. Cras porta tempus ex, sed laoreet leo laoreet vel. Morbi nec mauris et est blandit pharetra quis a erat. Nulla arcu ex, tempor sit amet ultricies sed, rhoncus at diam. Morbi lacinia sodales sodales. Nullam neque felis, tincidunt faucibus turpis eu, vulputate dignissim dolor. Curabitur rutrum varius justo, mollis mattis leo feugiat vitae. Aenean nisi massa, pretium maximus feugiat non, aliquam ut metus. Duis sapien nibh, feugiat tristique velit ac, efficitur interdum lorem. Maecenas molestie pulvinar nunc ac suscipit. Phasellus vel dapibus massa. Nulla sit amet cursus nunc. Curabitur consequat quam mi, eu finibus risus scelerisque ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac diam mauris. Pellentesque et tincidunt mi, ac semper ipsum. Duis ut ornare ante, eget varius odio. Vivamus arcu mauris, faucibus non risus sed, pulvinar lacinia leo. Proin pharetra arcu gravida mauris mattis rhoncus. Nunc id orci vel quam varius suscipit et eu enim. Cras commodo sit amet risus eget porttitor. Etiam dignissim nec ligula rutrum bibendum. Quisque sodales dolor dictum ullamcorper maximus. Curabitur laoreet egestas feugiat. Aliquam turpis nulla, posuere non massa at, varius auctor enim. Mauris arcu libero, finibus laoreet commodo id, volutpat eu purus. Quisque quis dolor tempor, interdum nisl id, feugiat eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque semper urna ac augue tristique aliquam. Vestibulum auctor imperdiet auctor. Integer feugiat quis ipsum et bibendum. Praesent eu lacus id nunc dictum consequat. Etiam sapien elit, fermentum a elit ut, scelerisque pulvinar metus. Nullam aliquet, augue in semper pulvinar, augue lectus dapibus risus, sed vehicula turpis enim ut orci. Sed vehicula tempor neque, mattis blandit purus tristique ac. Suspendisse tristique justo nec erat cursus molestie. Integer a facilisis dui. Sed venenatis diam a metus efficitur, sit amet iaculis odio lacinia. Etiam eleifend accumsan molestie. Donec pulvinar massa vitae maximus scelerisque. Nulla facilisi. Proin vel elit vitae felis maximus efficitur eu a ante. Nullam eros leo, volutpat et efficitur vel, condimentum vel ex. Mauris interdum, urna at venenatis egestas, sem urna ultrices quam, eget convallis diam lacus ullamcorper tellus. Nulla pellentesque metus id sem rutrum, ut consectetur nunc vehicula.',
      }
    ],
    testVar: '',
    routes: [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Appeal',
      route: '/appeal'
    },
    {
      name: 'Pricing',
      route: '/pricing'
    },
    {
      name: 'FAQs',
      route: '/faqs'
    },
    {
      name: 'Blog',
      route: '/blog'
    }]
  },
  getters: {
    getRoutes(state){
      return state.routes
    },
    getBlogPosts(state) {
      return state.blogPosts
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
