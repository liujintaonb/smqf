// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'swiper/dist/css/swiper.css';
import http from 'http'
import './less/Communal.less' //公共css
import './less/Communal-mobile.less'//公共less 用于兼容移动端
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import './less/peoplemessage.less';
import VideoPlayer from 'vue-video-player';
import VueLazyload from 'vue-lazyload'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import BMap from 'BMap'
// import map from './mapTem/mapTem'

// import { resolve } from 'url';

Vue.config.productionTip = false;
Vue.prototype.$ajax=axios;
Vue.prototype.http=http;
Vue.prototype.axios=axios;

// Vue.use(map)\
Vue.use(ElementUI);
Vue.use(VueLazyload)
Vue.use(VideoPlayer)
Vue.use(iView)


/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

