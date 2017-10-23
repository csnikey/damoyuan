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
           <div class="address">收货地址: {{personaddress}}</div>
            
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
                主讲老师：{{teacher}}<span class="lesson-subject">科目：</span>{{subject}}<br>
                上课时间：{{time}}
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
      personaddress:"浙江省杭州市西湖区的呢额外非123号"
    };
  },
  methods: {
    back: function() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* 地址面板 */
.li-address {
  padding: 30px 0;
  position: relative;
  &:after {
    display: inline-block;
    content: "";
    top: 55px;
    position: absolute;
    width: 14px;
    height: 14px;
    right: 30px;
    transform: rotate(45deg);
    border-top: solid 4px #c6cdd6;
    border-right: solid 4px #c6cdd6;
  }
  .address,.desc{
font-size: 26px;
  line-height: 37px;
  }
   .title {
  font-size: 30px;
  color: #333;
  line-height: 42px;
  .mobile{
    margin-left:30px;
  }
}
 .desc {
  color: #999;
}
 .address{
   color:#333;
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
  .lesson-basic {
    font-size: 26px;
    color: #999999;
    .lesson-subject {
      margin-left: 100px;
    }
  }
  .lesson-price {
    float: right;
    margin-right: 30px;
    text-align: right;
    font-size: 26px;
    color: #999;
    .lesson-pricenum {
      color: #ff3c4b;
    }
  }
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
//价格总计部分
.li-lesson-sum {
  padding-right: 30px;
  height: 96px;
  line-height: 96px;
  font-size: 30px;
  text-align: right;
  color: #333;
  .sum-num {
    margin-right: 22px;
  }
  .sum-price {
    color: #ff3c4b;
  }
}
</style>
