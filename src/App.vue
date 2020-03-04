<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item  path="/Home">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path="/About">

        <div slot='item-text'>关于</div>
      </tab-bar-item>
      <tab-bar-item path="/About">
        <div slot='item-text'>暂时</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from './components/tabbar/tabBar'
import TabBarItem from './components/tabbar/tabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style>

 @import "./assets/css/base.css";
</style>
