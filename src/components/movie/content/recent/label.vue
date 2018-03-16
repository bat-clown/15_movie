<template>
<label :class="{activate:isActive}">
  {{item}}
  <input type="radio" name="choice" :value="item" v-model="in_value">
</label>
</template>


<script>
  export default {
    props: ['item','index'],
    data(){
      return {
        in_value:''
      }
    },
    computed:{
      isActive(){
        return this.$store.getters.num === this.index
      }
    }
  }
</script>


<style></style>
