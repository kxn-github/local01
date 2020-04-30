var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    name:'kang'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message1: '页面加载于 ' + new Date().toLocaleString()
  }
})
var apps = new Vue({
  el: '#formtest',
  data: {
    username:'',
    password:'',
  }

})


