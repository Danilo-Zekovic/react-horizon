let content = require("./content.js")

var horizon = Horizon();
horizon.onReady(function() {
  document.querySelector('h1').innerHTML = content
});
horizon.connect();
