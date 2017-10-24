<template>
  <div class="g-main">
    <div class="m-title">
       <a @click="back" class="back"><img src="../assets/icon-back.png"></a>
       订单确认
     </div> 
     <div class="g-maincontainer">
     <div class="m-panel" v-if="!(personname&&personmobile&&personaddress)">
        <li class="li-titleline">讲义寄送地址</li>
        <li class="li-address">
           <div class="title">填写收货地址</div>
           <div class="desc">地址用来接收课程讲义资料</div>
            
        </li>

     </div> 
     
     <!-- 已经填写收货地址的 -->
        <div class="m-panel c-margintop-s" v-if="personname&&personmobile&&personaddress">
        <li class="li-titleline">讲义寄送地址</li>
        <li class="li-address">
           <div class="title">收件人：{{personname}}<span class="mobile">{{personmobile}}</span></div>
           <div class="address"><div class="address-label">收货地址: </div><div class="address-cont">{{personaddress}}</div></div>
            
        </li>

     </div> 
   
     
      <div class="m-panel c-margintop-s">
        <li class="li-titleline">课程信息</li>
        <li class="li-lesson">
           <img :src="imgurl" class="headimg">
           <div class="info">
              <div class="lesson-title">{{title}}</div>
              <div class="lesson-basic">
                主讲老师：{{teacher}}<span class="lesson-subject">科目：</span>{{subject}}<br>
                上课时间：{{time}}
              </div> 
              <div class="lesson-price">价格：<span class="lesson-pricenum">￥{{price}}</span></div>
           </div>  
        </li>
         <li class="li-lesson">
           <img :src="imgurl" class="headimg">
           <div class="info">
              <div class="lesson-title">{{title}}</div>
              <div class="lesson-basic">
                主讲老师:{{teacher}}<span class="lesson-subject">科目:</span>{{subject}}<br>
                上课时间:{{time}}
              </div> 
              <div class="lesson-price">价格：<span class="lesson-pricenum">￥{{price}}</span></div>
           </div>  
        </li>
        <li class="li-lesson-sum">
           <span class="sum-num">共{{sum}}门课程</span>总计：<span class="sum-price">￥{{sumprice}}</span>
        </li>  

     </div> 
     </div>
     <!-- 底部操作-->
     <div class="m-botopt">
         <span class="sumprice">￥{{sumprice}}</span><button class="toorder">提交订单</button>
     </div> 
  </div>
</template>

<script>
export default {
  name: "confirmorder",
  data() {
    return {
      imgurl: "",
      title: "秋季提分训练营九年级数学提高班秋季提分训练营九年级数学提高班（26节）",
      teacher: "二胖老师",
      subject: "数学",
      time: "7月15日-8月10日",
      price: "2342",
      sum: 2,
      sumprice: 3334,
      personname:'张三',
      personmobile:"18767101995",
      personaddress:"浙江省杭州市西湖区的呢sdcsdfwe f额外非123号"
    };
  },
  methods: {
    back: function() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 .g-maincontainer{
    padding-bottom:.98rem;
  }
/* 地址面板 */
.li-address {
  padding: .30rem 0;
  position: relative;
  &:after {
    display: inline-block;
    content: "";
    top: .55rem;
    position: absolute;
    width: .14rem;
    height: .14rem;
    right: .30rem;
    transform: rotate(45deg);
    border-top: solid .04rem #c6cdd6;
    border-right: solid .04rem #c6cdd6;
  }
  .address,.desc{
font-size: .26rem;
  line-height: .37rem;
  }
   .title {
  font-size: .30rem;
  color: #333;
  line-height: .42rem;
  .mobile{
    margin-left:.30rem;
  }
}
 .desc {
  color: #999;
}
 .address{
   color:#333;
   overflow: hidden;
   .address-label{
     float: left;
     width:1.3rem; 
   }
   .address-cont{
     float: left;
     width:5.5rem; 
   }
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
    width: 5.8rem;
  }
  .lesson-title,
  .lesson-basic {
    width: 5.4rem;
    float: right;
    margin-right: .58rem;
  }
  .lesson-title {
    line-height: .42rem;
    font-size: .30rem;
    color: #333333;
  }
  .lesson-basic {
    font-size: .26rem;
    color: #999999;
    .lesson-subject {
      margin-left: .20rem;
    }
  }
  .lesson-price {
    float: right;
    margin-right: .30rem;
    text-align: right;
    font-size: .26rem;
    color: #999;
    .lesson-pricenum {
      color: #ff3c4b;
    }
  }
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
    letter-spacing: -0.09px;
    text-align: center;
  }
}
//价格总计部分
.li-lesson-sum {
  padding-right: .30rem;
  height: .96rem;
  line-height: .96rem;
  font-size: .30rem;
  text-align: right;
  color: #333;
  .sum-num {
    margin-right: .22rem;
  }
  .sum-price {
    color: #ff3c4b;
  }
}
</style>
