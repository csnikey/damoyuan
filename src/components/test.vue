<template>
  <div >
浏览器：{{type}}；<br> 版本：{{version}}
  </div>
</template>

<script>
var UAParser = require('ua-parser-js')
var parser = new UAParser()
var result = parser.getResult()
console.log(result.browser)
var type = result.browser.name
var version = result.browser.version
export default {
  name: 'qq',
  data () {
    return {
      type: type,
      version: version
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
padding-top:70px;
}

</style>