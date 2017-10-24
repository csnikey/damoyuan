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
           <img :src="imgurl"  src="../assets/wx.png" class="headimg">
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
      imgurl: "/src/assets/wx.png",
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
    padding-bottom:.98rem;
  }
.m-botopt {
  position: absolute;
  bottom: 0rem;
  left: 0;
  right: 0;
  background: #fff;
  height: .98rem;
  line-height: .98rem;
  .sumprice {
    float: left;
    margin-left: .30rem;
    font-size: .40rem;
    color: #ff3c4b;
  }
  .toorder {
    float: right;
    width: 3.74rem;
    height: .98rem;
    background-color: #ff7681;
    color: #fff;
    font-size: .36rem;
    text-align: center;
  }
}
.m-timecounter{
  background:#fff;
  padding:.60rem 0;
  text-align:center;
  .title{
    font-size: .30rem;
  color: #333;
  line-height:.42rem;
  }
  .time{
    	font-size: .72rem;
	line-height: 1.0;
	color: #ff4949;
  }
}

.li-lesson {
  padding: .20rem 0;
  overflow: hidden;
  border-bottom: solid .02rem #ededed;
  .headimg {
    float: left;
    width: 1.00rem;
    height: 1.00rem;
    border-radius: 50%;
  }
  .info {
    margin-left: .20rem;
    float: right;
    width: 5.06rem;
  }
  .lesson-title,
  .lesson-basic {
    width: 5.40rem;
    float: right;
    margin-right: .58rem;
  }
  .lesson-title {
    line-height: .42rem;
    font-size: .30rem;
    color: #333333;
  }
 
}

// 支付方式
.payway{
  height:.78rem;
    line-height:.78rem;
    color:#999;
    font-size:.26rem;
    border-bottom: solid .02rem #ededed; 
  .icon{
   width:.46rem;
   height:.46rem;
   vertical-align: middle;
  }
  .type{
    font-size: .26rem;
  color: #999;
  margin-left:.20rem;
  }
}
</style>
