<template>
  <i :class="classObject" @mouseenter="handle"></i>
</template>


<script>
  export default {
    props: ['indexD'],
    data(){
      return {}
    },
    computed: {
      classObject: function () {
        return {
          dot: 'dot',
          'activate': (this.$store.getters.left/-700) === this.indexD
        }
      }
    },
    methods: {
      handle(){
        this.$store.commit('CHANGEPAGE',{indexD: this.indexD})
      }
    }
  }
</script>


<style></style>
