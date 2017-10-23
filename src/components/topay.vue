<template>
  <div class="g-main">
    <div class="m-title">
       <a @click="back" class="back"><img src="../assets/icon-back.png"></a>
       支付订单
     </div> 
     <div class="g-maincontainer">
    
     
       <div class="m-timecounter">
          <div class="title">支付剩余时间</div>
          <div class="time">{{time}}</div>
       </div>  
     
      <div class="m-panel c-margintop-s">
        <li class="li-titleline">订单号：{{orderNo}}</li>
        <li class="li-lesson">
           <img :src="imgurl" class="headimg">
           <div class="info">
              <div class="lesson-title">{{title}}</div>
              
           </div>  
        </li>
     </div> 

     <div class="m-panel c-margintop-s">
        <li class="li-titleline">支付方式</li>
        <li class="payway">
           <img src="../assets/alipay.png" class="icon"/> <label class="type">支付宝</label><input type="radio" checked/>
        </li> 
         <li class="payway">
           <img src="../assets/wx.png" class="icon"/> <label class="type">微信支付</label><input type="radio"/>
        </li> 
     </div> 
     </div>
     <!-- 底部操作-->
     <div class="m-botopt">
         <span class="sumprice">￥{{sumprice}}</span><button class="toorder">确认支付</button>
     </div> 
  </div>
</template>

<script>
export default {
  name: "confirmorder",
  created:function(){
  this.counter();
  },
  data() {
    return {
      imgurl: "",
      sumprice:"399",
      time:'',
      inittime:1800,
      t:'',
      orderNo:'KKL_ZB_4837987835782748978389328',
      title: "秋季提分训练营九年级数学提高班秋季提分训练营九年级数学提高班（26节）",
    };
  },
  methods: {
    back: function() {},
    calc:function(time){
      if(this.inittime>=0){
          var sec=time%60;
      var min=(time-sec)/60
      if(sec<10){
        sec=`0${sec}`;
      }
      
      this.time= `${min}:${sec}`
      this.inittime--
      }else{
        clearInterval(this.t);
        this.$router.push("error");
        this.inittime=1800
      }
     
    },
    
    counter:function(){
      this.inittime--;
       this.calc(this.inittime);
      this.t= setInterval(()=>{
        this.calc(this.inittime);
       },1000)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.g-maincontainer{
    padding-bottom:98px;
  }
.m-botopt {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  background: #fff;
  height: 98px;
  line-height: 98px;
  .sumprice {
    float: left;
    margin-left: 30px;
    font-size: 40px;
    color: #ff3c4b;
  }
  .toorder {
    float: right;
    width: 374px;
    height: 98px;
    background-color: #ff7681;
    color: #fff;
    font-size: 36px;
    letter-spacing: -0.9px;
    text-align: center;
  }
}
.m-timecounter{
  background:#fff;
  padding:60px 0;
  text-align:center;
  .title{
    font-size: 30px;
  color: #333;
  line-height:42px;
  }
  .time{
    	font-size: 72px;
	line-height: 1.0;
	color: #ff4949;
  }
}

.li-lesson {
  padding: 20px 0;
  overflow: hidden;
  border-bottom: solid 2px #ededed;
  .headimg {
    float: left;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .info {
    margin-left: 20px;
    float: right;
    width: 506px;
  }
  .lesson-title,
  .lesson-basic {
    width: 540px;
    float: right;
    margin-right: 58px;
  }
  .lesson-title {
    line-height: 42px;
    font-size: 30px;
    color: #333333;
  }
 
}

// 支付方式
.payway{
  height:78px;
    line-height:78px;
    color:#999;
    font-size:26px;
    border-bottom: solid 2px #ededed; 
  .icon{
   width:46px;
   height:46px;
   vertical-align: middle;
  }
  .type{
    font-size: 26px;
  color: #999;
  margin-left:20px;
  }
}
</style>
