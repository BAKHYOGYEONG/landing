import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'




// 부트스트랩 뷰
Vue.config.productionTip = false

Vue.use(BootstrapVue)


// 뷰의 유효성 체크
import VeeValidate from 'vee-validate'
import ko from 'vee-validate/dist/locale/ko'
const config = {
  locale: 'ko',
  dictionary: {
    ko
  }
}
// 뷰 유효성 체크 모듈 사용 설정
Vue.use(VeeValidate, config)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
