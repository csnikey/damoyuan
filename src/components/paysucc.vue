<template>
  <div >
    

信息：{{info}}


  </div>
</template>

<script>
var info = require('../lib/uautil')

export default {
  name: 'paysucc',
  data () {
    return {
      info:info
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
padding-top:70px;
}
a{
  color:blue;
}
</style>