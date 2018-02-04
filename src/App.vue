<template>
  <div id="app">
    <router-view/>
    <player/>
  </div>
</template>

<script>
// const player= resolve => {
//   import('./components/player/player').then()
// }
const player = () => import('./components/player/player')

export default {
  components:{
    player
  },
  name: 'app'
}
</script>

<style>
html,body{
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
