<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
img {
  max-width:100%;
}
#logo{
  width:50px;
  position: fixed;
  right:15px;
  top:15px;
}
a{
  text-decoration: none;
  color:#000;
}

</style>
