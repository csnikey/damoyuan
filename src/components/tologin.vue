<template>
  <div >
    <ul>
       <group>
    <x-input title="手机号码" is-type=china-mobile  placeholder=请输入11位手机号码></x-input>
    <x-input title="验证码" class="weui-vcode" >
        <x-button slot="right" :type="btntype" mini @click.native="sendcode">{{text}}</x-button>
      </x-input>
      
  </group>
    </ul>
  </div>
</template>

<script>
import vux from 'vux'
console.log(vux)
import {Group,XInput,XButton, Cell} from "vux"
export default {
  name: 'tologin',
  components:{Group,XButton,
    XInput,
    Cell},
  mounted:function(){
    this.$vux.toast.text("加载成功")
  }  ,
  data () {
    return {
        text:'获取验证码',
        time:10,
        cansend:true,
        btntype:"primary"

    }},
    methods: {
      timer:function(){
            let timetemp=0
           if(this.time>0){
             timetemp=this.time--
             this.text= `倒计时${timetemp}s`
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
          // 发送验证码
          this.cansend=false;
          this.btntype="default"
          this.text="倒计时10s"
          this.time--
          this.t=setInterval(this.timer,1000);
        }
           
      },

    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
padding-top:70px;
}

</style>
