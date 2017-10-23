<template>
  <div >
    
<br>
信息：{{info}}
<button>微信支付</button>
<button ><a href="https://mclient.alipay.com/home/exterfaceAssign.htm?alipay_exterface_invoke_assign_client_ip=124.160.66.250&body=%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E8%AE%A2%E5%8D%95-130408670372891508490253&subject=%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E8%AE%A2%E5%8D%95-130408670372891508490253&sign_type=RSA&notify_url=http%3A%2F%2F10.53.86.13%3A8966%2Fpaygate%2Fnotify%2Falipay%2Fpaynotify%2Fwap&out_trade_no=130408670372891508490253&return_url=http%3A%2F%2Fi.waimai.meituan.com%2Fmti%2Forder%2Fstatusdetail%2F13582492538155461&sign=DOFbOXYGvXXEhSe8%2FR9lEcGZAXQw2uwtefsBS5GnuQUuthznQqt0oRkNWV5zNYQH%2BzmqV8PggBcfVnHr7yYK5Berxf8IylZAKVDnjj%2B7CBE4rBe8c5W8F%2BxNHRULuMhunTldGu8Vq2PapkH1YukptvO2iv%2FlRrrkQn33E2rZZOk%3D&_input_charset=utf-8&it_b_pay=1440m&alipay_exterface_invoke_assign_target=mapi_direct_trade.htm&alipay_exterface_invoke_assign_model=cashier&total_fee=33.5&service=alipay.wap.create.direct.pay.by.user&partner=2088311465207164&seller_id=2088311465207164&alipay_exterface_invoke_assign_sign=_mdy1_i4d%2F_mh_gn_u_f55_j1g6_a_ii_o8_f0_m_j_h_vv_w_wlu_q_mr%2B_vek_a9dws_znt6ug%3D%3D&payment_type=1">支付宝测试地址</a></button>
<ul style="text-align:center">
  页面调试地址：<br>
  <router-link to="tologin" >注册登录</router-link><br>
  <router-link to="confirmOrder" >确认订单</router-link><br>
  <router-link to="confirmaddr" >收货地址</router-link><br>
  <router-link to="paySucc" >支付成功页</router-link>
</ul>
  </div>
</template>

<script>
var info = require('../lib/uautil')

export default {
  name: 'qq',
  data () {
    return {
      info:info
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#app{
font-size:40px;
}
a{
  color:blue;
  
}
</style>