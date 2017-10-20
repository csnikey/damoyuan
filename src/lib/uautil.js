var UAParser = require('ua-parser-js')
// var vconsole=require("../lib/vconsole.min.js")
var parser = new UAParser()
var result = parser.getResult()
var type = result.browser.name
var version = result.browser.version
var os = result.os.name
var info = {
  os, type, version
}
module.exports = info
