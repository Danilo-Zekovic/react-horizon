import Hello from './hello.jsx';
var con = require("./content.js")

var horizon = Horizon()
horizon.onReady(function() {
  document.querySelector('h1').innerHTML = con
});
horizon.connect()
