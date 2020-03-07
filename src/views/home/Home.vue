<template>
  <div class="home">
   <h2>首页</h2>
   {{$store.state.message}}
  </div>
</template>

<script>
import {getHome} from "network/home"
export default {
  name: 'Home',
  components: {
    
  }
}
</script>
