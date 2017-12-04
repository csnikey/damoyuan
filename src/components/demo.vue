<template>
  <div >

  </div>
</template>

<script>
var j=1;
function demo(){
    console.log(j);//提示undefined ,因为布局有定义变量，先声明了变量，而赋值延迟
    var j=3;
    console.log(j);
}
demo();
export default {
  name: 'demo',
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

</style>
