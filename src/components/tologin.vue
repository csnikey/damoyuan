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
    <box gap="10px 10px">
      <x-button type="primary">primary</x-button>
    </box> -->


     <div class="m-title">
       <a @click="back" class="back"><img src="../assets/icon-back.png"></a>
       验证码登录
     </div> 
     <div class="g-maincontainer">
     <div class="g-container">
       <form class="m-form c-margintop-s">
       <li class="formli"><input placeholder="请输入手机号" class="u-input-text" v-model="phoneno"> </li>
       <li class="formli"><input placeholder="验证码" class="u-input-vaild" v-model="vaild">
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
 line-height:78px;
 height:78px;
 border-bottom:2px solid #ededed;
 text-align: left;
  }
    .u-input-text{
      width:100%;
      font-size:30px;
      line-height:78px;
  }
  .u-input-vaild{
    width:400px;
    float:left;
    font-size:30px;
    line-height:78px;
  }
  .sendcode{
    width:240px;
    float:right;
    color:#0dd9a6;
    font-size:28px;
    line-height:78px;
    text-align: right;
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

.tipli{
    font-size: 28px;
    text-align: left;
    height:40px;
    line-height:40px;
    color: #ee1e0b;
    margin-top: 20px;
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
        time:120,
        cansend:true,
        btntype:"primary",
        phoneno:'',
        vaild:'',
        tipmsg:''
    }},
    methods: {
      next:function(){
         this.tipmsg="手机号密码错误"
         this.$vux.alert.show({
           title:'手机号注册成功，密码是123678',

         })
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
              this.time=120
              clearInterval(this.t);
              this.text= `获取验证码`
              this.cansend=true
              this.btntype="primary"
           }
           
      },
      sendcode:function(){
        if(this.cansend){
          // 发送验证码
          this.cansend=false;
          this.btntype="default"
          this.text="重新发送120"
          this.time--
          this.t=setInterval(this.timer,1000);
        }
           
      },

    }
  
}
</script>


