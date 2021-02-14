<template>
  <div>
    
      <Order-header></Order-header>
      <router-view></router-view>
       cart
      <Order-footer></Order-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import OrderFooter from '../components/OrderFooter.vue'
export default {
  name: 'Cart',
  components:{
      OrderHeader,
      OrderFooter
  }
}
</script>
