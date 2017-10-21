<template>
  <div >
    <ul>
       <group>
    <x-input title="手机号码" is-type=china-mobile  placeholder=请输入11位手机号码></x-input>
    <x-input title="验证码" class="weui-vcode" >
        <x-button slot="right" type="primary" mini @click.native="sendcode">{{text}}</x-button>
      </x-input>
  </group>
    </ul>
  </div>
</template>

<script>
import {Group,XInput,XButton, Cell} from "vux"
export default {
  name: 'tologin',
  components:{Group,XButton,
    XInput,
    Cell},
  data () {
    return {
        text:'发送验证码',
        time:10,

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
              this.text= `发送验证码`
           }
           
      },
      sendcode:function(){
           this.t=setInterval(this.timer,1000);
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
