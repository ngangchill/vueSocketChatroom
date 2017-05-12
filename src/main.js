// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import VueSocketio from 'vue-socket.io';
import { AlertPlugin, AjaxPlugin } from 'vux';
import router from './router/index';
import App from './App';

Vue.use(VueSocketio, 'http://localhost:3000'); // 代理http://localhost:3000的socket
Vue.use(VueRouter); // 使用vue-router
Vue.use(AlertPlugin); // 使用alert插件
Vue.use(AjaxPlugin); // 使用ajax插件

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  sockets: {
    connect() {
      console.log('socket connected');
    },
    customEmitfunc() {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)');
    },
  },
  router,
  render: h => h(App),
}).$mount('#app-box');
