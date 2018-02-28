<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="turn">send</button>
  </div>
</template>


<script>
  export default{
      data(){
          return {
              num:'',
              msg:''
          }
      },
    mounted(){
          this.num = this.$route.params.price;
          console.log(this.$route.params.price);
    },
    methods:{
          turn(){
            this.$router.push('/send');
          }
    }
  }
</script>


<style></style>
