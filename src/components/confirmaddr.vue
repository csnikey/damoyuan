<template slot-scope>
  <div class="g-main">
    <div class="m-title">
       <a @click="back" class="back"><img src="../assets/icon-back.png"></a>
       订单确认
     </div> 
     <div class="g-maincontainer">

          <form class="m-form c-margintop-s">
       <li class="formli"><label class="datatype">收件人</label><input placeholder="请输入收件人姓名" class="u-input-text" v-model="personname"> </li>
       <li class="formli"><label class="datatype">手机号</label><input placeholder="请输入手机号" class="u-input-text" v-model="personmobile"> </li>
       <li class="formli formli-area-picker"><label class="datatype">所在地区</label><span placeholder="请选择" class="u-input-area"  disabled>请选择</span> </li>
       <li class="formli-area"><label class="datatype">详细地址</label><textarea placeholder="请输入详细地址信息" class="u-input-textarea" v-model="personaddr"></textarea></li>
   
       <button class="u-button-block c-margintop-m c-main-size" @click="submit">保存地址</button>
       </form>
     </div> 
  </div>
</template>

<script>
export default {
  name: 'confirmaddr',
  data () {
    return {
    personname:'',
    personmobile:'',
    personarea:'',
    personaddr:'西湖大道人民东路1001室'
    }
  },
  methods:{
    back:function(){

    },
    submit:function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" slot-scope>
.g-main{
  background:#fff;
}
.c-main-size{
  width:6.48rem!important;
  margin:0 auto;
  margin-left: .51rem;
}
  .m-form{
    .formli,.formli-area{
 line-height:.78rem;
 height:.78rem;
 text-align: left;
 border-bottom:  .02rem #f5f5f5 solid;
 padding:0 .30rem;
  }
  .datatype{
    width:1.20rem;
    float: left;
    margin-right:.60rem;
    font-size:.30rem;
    color:#666;
  }
    .u-input-text,.u-input-area,.u-input-textarea{
      width:4.99rem;
      font-size:.30rem;
      color:#333;
      line-height:.78rem;
      float: left;
  }
  .u-input-textarea{
    padding-top:.2rem;
      line-height:.40rem;
  }
  .u-input-area{
      width:4.83rem;
      font-size:.30rem;
      color:#999;
      line-height:.78rem;
  }
  .formli-area{
  overflow: hidden;
  height:auto;
  resize: none;
  outline: none;
  -webkit-appearance: none;
  height:1.56rem;
  }
  .formli-area-picker{
    position: relative;
    &:after{
    display: inline-block;
    content: "";
    top: .26rem;
    position: absolute;
    width: .14rem;
    height: .14rem;
    right: .30rem;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-top: solid .04rem #c6cdd6;
    border-right: solid .04rem #c6cdd6;
  }
  }
.u-button-block{
    background:#0dd9a6;
    width:100%;
    border-radius:.08rem;
    height:.88rem;
    line-height:.88rem;
    font-size:.36rem;
    text-align: center;
    color:#fff;

}
  }
</style>
