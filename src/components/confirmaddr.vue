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
       <li class="formli formli-area-picker"><label class="datatype">所在地区</label><input placeholder="请选择" class="u-input-area" v-model="personarea"> </li>
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
  width:648px!important;
  margin:0 auto;
  margin-left: 51px;
}
  .m-form{
    .formli,.formli-area{
 line-height:78px;
 height:78px;
 text-align: left;
 border-bottom:  2px #f5f5f5 solid;
 padding:0 30px;
  }
  .datatype{
    width:120px;
    float: left;
    margin-right:60px;
    font-size:30px;
    color:#666;
  }
    .u-input-text,.u-input-area,.u-input-textarea{
      width:499px;
      font-size:30px;
      color:#333;
      line-height:78px;
      float: left;
  }
  .u-input-area{
      width:483px;
      font-size:30px;
      color:#333;
      line-height:78px;
  }
  .formli-area{
  overflow: hidden;
  height:auto;
  resize: none;
  outline: none;
  -webkit-appearance: none;
  height:156px;
  }
  .formli-area-picker{
    position: relative;
    &:after{
    display: inline-block;
    content: "";
    top: 26px;
    position: absolute;
    width: 14px;
    height: 14px;
    right: 30px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-top: solid 4px #c6cdd6;
    border-right: solid 4px #c6cdd6;
  }
  }
.u-button-block{
    background:#0dd9a6;
    width:100%;
    border-radius:8px;
    height:88px;
    line-height:88px;
    font-size:36px;
    text-align: center;
    color:#fff;

}
  }
</style>
