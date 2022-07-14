<template>


 <the-header></the-header>

  <router-view></router-view>

  <the-footer></the-footer>

</template>

<script>
import AOS from 'aos'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'


export default {
  name: 'App',
  data() {
    return {
      
      
    }
  },
  methods: {
    getImg(pic) {
      return require('./assets/00' + pic + '.jpg')
    },
    onClickOutside() {
      console.log("clicked outside");
    },
    
  },
  created() {
    AOS.init()
  },
  components: {
    TheHeader, TheFooter
  }
}
</script>

<style lang="scss">

</style>
