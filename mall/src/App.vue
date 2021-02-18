<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>


<style>
@import url("./assets/scss/reset.scss");
</style>
<script>
import storage from './storage/index.js'
export default {
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    // let parment={
    //   a:1,
    //   b:2,
    //   c:3
    // }
    // storage.setItem("abc",parment,"user")
    // storage.clear("mall");

  //  this.axios.get('/user/login').then((res)=>{
  // this.res = res;
  // console.log(this.res)
    // })
  }
}
</script>
