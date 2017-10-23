<template>
   <div class="g-main">
    <div class="m-title">
       <!-- <a @click="back" class="back"><img src="../assets/icon-back.png"></a> -->
       报名结果
     </div> 
     <div class="g-maincontainer">
       <div class="m-panel-paysucc">
        <img src="../assets/paysucc.png" class="paysuccimg"/>
        <ul class="lessonbasic">
          <li class="msgtitle">报名成功</li>
          <li class="msgli">开课时间:{{opentime}}</li>
          <li class="msgli">辅导老师：{{teacher}}</li>
          <li class="msgli">班级名称：{{classname}}</li>

        </ul>
        <div class="tipmsg"><div class="tipmsginfo">立即加入班级QQ群<span class="classqq">{{classqq}}</span>
和同学打个招呼吧</div></div>
         <button class="u-button-s" v-show="isApp">下载APP</button> 
       </div>


       <div class="m-panel-focus c-margintop-s">
          <img src="" class="qrcode"/>
          <div class="focus">
            <label class="square1"></label>
            <label class="square2"></label>
            <label class="square3"></label>
            <label class="square4"></label>
             <ul class="focus-words">
               <li class="focus-title">关注开课啦直播微信公众号</li>
                <li class="focus-line">获取直播时间</li>
                <li class="focus-line">还能收到每周学习报告</li>
             </ul> 
          </div> 

       </div>

     </div>


  </div>
</template>

<script>
var info = require('../lib/uautil')

export default {
  name: 'paysucc',
  data () {
    return {
      info:info,
      opentime:'10月19号',
      teacher:'erpanglaosh',
      classname:'数学提高一班',
      classqq:231313,
      isApp:true,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.g-main{
  background:#ededed;
}
.m-panel-paysucc{
  background:#fff;
  padding-top:50px;
   text-align: center;
   padding-bottom:60px;
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
  .paysuccimg{
    margin:0 auto 50px;
    width:202px;
    height:204px;
    display:block;
  }
  .lessonbasic{
    .msgtitle{
    font-size: 34px;
   color: #333;
   line-height: 48px;
    }
    .msgli{
	font-size: 30px;
	line-height: 1.5;
	color: #999;
    }}
  .tipmsg{
   width: 470px;
	border-top: solid 2px #ededed;
  margin:30px auto;
  padding-top:30px;
  .tipmsginfo{
      width: 431px;
	font-size: 30px;
	line-height: 1.5;
  color: #999;
    .classqq{
      font-weight: 600;
      color: #0dd9a6;}
    }

  }  
  
}
.m-panel-focus{
  background:#fff;
  padding:46px 100px;
  margin-top:20px;
  overflow: hidden;
  .qrcode{
    width: 200px;
    height:200px;
    float:left;
  }
  .focus{
    float: left;
    margin-left:24px;
    position: relative;
    width:266px;
    height:140px;
    padding:30px;
    .focus-words{
      text-align: center;
      position: absolute;
      top:35px;
      bottom:30px;
      left:10px;
      .focus-title{
          font-size: 26px;
          font-weight: 500;
        color: #0dd9a6;
      }
      .focus-line{
        font-size: 30px;
	   line-height: 1.5;
    	color: #999;
      }
    }
    .square1,.square2,.square3,.square4{
        width:30px;
      height:30px;
      position:absolute;
    }
    .square1{
      border-top: solid 2px #ededed;
      border-left: solid 2px #ededed;
      top:0;
      left:0;
    }
     .square2{
      border-top: solid 2px #ededed;
      border-right: solid 2px #ededed;
      top:0;
      right:0;
    }
     .square3{
      border-bottom: solid 2px #ededed;
      border-left: solid 2px #ededed;
      bottom:0;
      left:0;
    }
     .square4{
      border-bottom: solid 2px #ededed;
      border-right: solid 2px #ededed;
      bottom:0;
      right:0;
    }
  }

}

</style>