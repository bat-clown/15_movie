<template>
  <div>
    <p>check</p>
    <button @click="handle">turn</button>
  </div>
</template>


<script>
  export default{
      methods:{
        handle(){
          this.$router.push('/pay/'+100);
        }
      }
  }
</script>


<style></style>
