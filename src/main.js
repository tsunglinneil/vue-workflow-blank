import Vue from 'vue'
import App from './App.vue'
/**
 * 需求:
 * 1. 列出預設國家清單 hint: parent to child 使用props傳遞資訊
 * 2. 點選清單中項目時觸發事件，於App.vue組件中呈現所選清單項目內容 hint: child to parent 使用$emit或使用eventBus註冊事件傳遞資訊
 */
new Vue({
  el: '#app',
  render: h => h(App)
})
