<template>
  <div>
    <h1>send</h1>
    <button @click="backCheck">send</button>
    <router-link to="/check">check</router-link>
  </div>
</template>


<script>
  export default{
      methods:{
          backCheck(){
              this.$router.push('/check')
          }
      }
  }
</script>


<style></style>
