<template>
  <div>
      order
      <Order-header></Order-header>
      <router-view></router-view>
      <Order-footer></Order-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import OrderFooter from '../components/OrderFooter.vue'
export default {
  name: 'Order',
  components:{
      OrderHeader,
      OrderFooter
  }
}
</script>
