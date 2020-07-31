import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store/index'
import global from './config/global_variable.js'
import utils from './utils/mutils.js'
import Api from './service/api/api.js'
import './theme/_theme_all.scss'
import VueRouterCache from 'vue-router-cache'
import './config/vant' //按需引入组件
import {
  Field, Cell, CellGroup, Button, Toast, Grid,
  GridItem, Row, Col, CountDown, ActionSheet,
  Tab, Tabs, List, PullRefresh, Card, Dialog,
  Popup, Icon, Radio, RadioGroup, Stepper,
} from 'vant';

Toast.allowMultiple();

Vue.use(Field).use(Cell).use(CellGroup).use(Button).use(Toast)
  .use(Grid).use(GridItem).use(Row).use(Col).use(CountDown)
  .use(ActionSheet).use(Tab).use(Tabs).use(List).use(PullRefresh)
  .use(Card).use(Dialog).use(Popup).use(Icon).use(Radio).use(RadioGroup).use(Stepper);

Vue.config.productionTip = false
Vue.prototype.$global = global;
Vue.prototype.$Util = utils;
Vue.prototype.$Api = Api;
Vue.use(VueRouterCache, {
  router: router,
  max: 15,
  // true为单例模式， false为多例模式
  isSingleMode: true,
  isDebugger: false,
  directionKey: 'direction',
  getHistoryStack() {
    const str = window.sessionStorage.getItem('historyStack');
    return JSON.parse(str)
  },
  setHistoryStack(history) {
    const str = JSON.stringify(history);
    window.sessionStorage.setItem('historyStack', str)
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app')
