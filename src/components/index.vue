<template>
  <div >
  <img src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=5b4c126df21986184147e88272d6494e/f2deb48f8c5494ee1848981527f5e0fe99257e50.jpg" id="logo">
  <h2>公告栏</h2>
  <ul class="m-links">
    <li>1：班级qq:<router-link to="qq" style="color:#42b983">578025048</router-link></li>
    <li>2：《管理学——原理与方法》百度网盘课件资料：<a href="https://pan.baidu.com/s/1eSmyZg2" style="color:#42b983">点击跳转</a></li>

  </ul> 
  </div>
</template>

<script>
export default {
  name: 'index',
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
#app{
padding-top:70px;
}
.m-links{
  padding:0 15px;
}
.m-links li{
  line-height:25px;
  text-align: left;
  list-style: none;
}
</style>
