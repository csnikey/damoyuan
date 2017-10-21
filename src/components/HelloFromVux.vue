<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> 测试地址</h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <ul style="text-align:center">
  页面调试地址：<br>
  <router-link to="tologin" >注册登录</router-link><br>
  <router-link to="confirmorder" >确认订单</router-link><br>
  <router-link to="confirmaddr" >收货地址</router-link><br>
  <router-link to="paysucc" >支付成功页</router-link>
</ul>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
