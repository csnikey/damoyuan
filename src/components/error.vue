<template>
   <div class="g-main">
    <div class="m-title">
       <!-- <a @click="back" class="back"><img src="../assets/icon-back.png"></a> -->
       报名结果
     </div> 
     <div class="g-maincontainer">
        <div class="m-panel-payfail">
           <img src="../assets/payfail.png" class="failimg"/>
           <div class="msgtitle">{{msg}}</div>
           <div class="msgtip">请将重新购买</div>
           <button class="u-button-s" >重新报名</button>
        </div> 

     </div>
  </div>
</template>

<script>
export default {
  name: 'qq',
  data () {
    return {
      msg: '订单已超时',
      desc: '项目管理方向'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.g-maincontainer{
  text-align: center;
}
.m-panel-payfail{
   text-align:center;
  .failimg{
    width:300px;
    height:300px;
    margin-top:200px;
  }
  .msgtitle{
  line-height: 48px;
	font-size: 34px;
	color: #333;
  }
  .msgtip{
    font-size: 30px;
	line-height: 1.5;
	color: #999;
  }


 .u-button-s{
   	width: 240px;
	height: 80px;
	border-radius: 8px;
  background-color: #0dd9a6;
  margin:30px auto 0;
  color:#fff;
  text-align:center;
  font-size:30px;
 }
}


</style>
