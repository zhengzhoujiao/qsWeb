<template>
  <div>
    <div id="app">
      <router-view v-if="isRouterAlive"/>
    </div> 
    <div id="micro_container"></div>
  </div>
</template>

<script>
export default {
  name:'app',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="less">

</style>
