<template>
  <div class="g-main">
    <!-- <ul>
       <group>
    <x-input title="手机号码" is-type=china-mobile  placeholder=请输入11位手机号码></x-input>
    <x-input title="验证码" class="weui-vcode" >
        <x-button slot="right" :type="btntype" mini @click.native="sendcode">{{text}}</x-button>
      </x-input>

  </group>
    </ul>
    <box gap="10rem 10rem">
      <x-button type="primary">primary</x-button>
    </box> -->


     <div class="m-title">
       <a @click="back" class="back"><img src="../assets/icon-back.png"></a>
       验证码登录
     </div> 
     <div class="g-maincontainer">
     <div class="g-container">
       <form class="m-form c-margintop-s">
       <li class="formli"><input placeholder="请输入手机号" class="u-input-text" v-model.trim="phoneno"> </li>
       <li class="formli"><input placeholder="验证码" class="u-input-vaild" v-model.trim="vaild">
       <span @click=sendcode :class="['sendcode',cansend?'':'c-color-gray']">{{text}}</span> </li>
       <li class="tipli">{{tipmsg}}</li>
       <button class="u-button-block c-margintop-m" @click="next">下一步</button>
       </form>
     </div>
     </div>
  </div>
</template>

<style lang="less" scoped>
.g-main{
  background:#fff;
}
 /* 表单的样式 */
  .m-form{
    .formli{
 line-height:.78rem;
 height:.78rem;
 border-bottom:.02rem solid #ededed;
  }
    .u-input-text{
      width:100%;
      float:left;
      font-size:.30rem;
      line-height:.7rem;
  }
  .u-input-vaild{
    width:3.00rem;
    float:left;
    font-size:.30rem;
    line-height:.78rem;
  }
  .sendcode{
    width:2rem;
    float:right;
    color:#0dd9a6;
    font-size:.28rem;
    line-height:.78rem;
    text-align: right;
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

.tipli{
    font-size: .28rem;
    text-align: left;
    height:.40rem;
    line-height:.40rem;
    color: #ee1e0b;
    margin-top: .20rem;
}
  }

</style>
<script>
import {Group,XInput,XButton, Cell, Box} from "vux"
export default {
  name: 'tologin',
  components:{Group,XButton,
    XInput,
    Cell,Box},
  mounted:function(){
    // this.$vux.toast.text("加载成功")
  }  ,
  data () {
    return {
        text:'获取验证码',
        time:10,
        cansend:true,
        btntype:"primary",
        phoneno:'',
        vaild:'',
        tipmsg:''
    }},
    methods: {
      next:function(){
        //  this.tipmsg="手机号密码错误"
        //  this.$vux.alert.show({
        //    title:'手机号注册成功，密码是123678',

        //  })
      },
      back:function(){
          console.log(111);
      },
      timer:function(){
            let timetemp=0
           if(this.time>0){
             timetemp=this.time--
             this.text= `重新发送${timetemp}`
           }else{
              this.time=10
              clearInterval(this.t);
              this.text= `获取验证码`
              this.cansend=true
              this.btntype="primary"
           }
           
      },
      sendcode:function(){
        if(this.cansend){
          var params={
              'mobileNo':'18767101995'
          }
          console.log(params)
          this.$api.post('login/sendLoginCode',params).then(
            (res)=>{
              console.log(res);
            }

          )
          // 发送验证码
          // this.cansend=false;
          // this.btntype="default"
          // this.text="重新发送10"
          // this.time--
          // this.t=setInterval(this.timer,1000);
        }
           
      },

    }
  
}
</script>


