<template>
  <div class="hello">
     <img src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=5b4c126df21986184147e88272d6494e/f2deb48f8c5494ee1848981527f5e0fe99257e50.jpg" >
    <h1>{{ msg }}</h1>
    <h2>{{desc}}</h2>
    <h2><router-link :to="'index'">进入主页</router-link></h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '西南交通大学(杭州班)',
      desc: '项目管理方向'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
a{
  
  color: #42b983;

}
</style>

