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
          <img src="../assets/qrcode.png" class="qrcode"/>
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
  padding-top:.50rem;
   text-align: center;
   padding-bottom:.60rem;
   .u-button-s{
   	width: 2.40rem;
	height: .80rem;
	border-radius: .08rem;
  background-color: #0dd9a6;
  margin:.30rem auto 0;
  color:#fff;
  text-align:center;
  font-size:.30rem;

   }
  .paysuccimg{
    margin:0 auto .50rem;
    width:2.02rem;
    height:2.04rem;
    display:block;
  }
  .lessonbasic{
    .msgtitle{
    font-size: .34rem;
   color: #333;
   line-height: .48rem;
    }
    .msgli{
	font-size: .30rem;
	line-height: 1.5;
	color: #999;
    }}
  .tipmsg{
   width: 4.70rem;
	border-top: solid .02rem #ededed;
  margin:.30rem auto;
  padding-top:.30rem;
  .tipmsginfo{
      width: 4.31rem;
	font-size: .30rem;
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
  padding:.46rem 0.80rem;
  margin-top:.20rem;
  overflow: hidden;
  .qrcode{
    width: 2.00rem;
    height:2.00rem;
    float:left;
  }
  .focus{
    float: left;
    margin-left:.24rem;
    position: relative;
    width:3.66rem;
    height:1.40rem;
    padding:.30rem 0;
    .focus-words{
      text-align: center;
      position: absolute;
      top:.35rem;
      bottom:.30rem;
      left:.0rem;
      right:0;
      .focus-title{
          font-size: .26rem;
          font-weight: 500;
        color: #0dd9a6;
      }
      .focus-line{
        font-size: .30rem;
	   line-height: 1.5;
    	color: #999;
      }
    }
    .square1,.square2,.square3,.square4{
        width:.30rem;
      height:.30rem;
      position:absolute;
    }
    .square1{
      border-top: solid .02rem #ededed;
      border-left: solid .02rem #ededed;
      top:0;
      left:0;
    }
     .square2{
      border-top: solid .02rem #ededed;
      border-right: solid .02rem #ededed;
      top:0;
      right:0;
    }
     .square3{
      border-bottom: solid .02rem #ededed;
      border-left: solid .02rem #ededed;
      bottom:0;
      left:0;
    }
     .square4{
      border-bottom: solid .02rem #ededed;
      border-right: solid .02rem #ededed;
      bottom:0;
      right:0;
    }
  }

}

</style>