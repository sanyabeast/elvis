import Vue from "vue"
import Vuex from "vuex"
import Editor from "./UI/Vue/Editor.vue"
import VueSuperMethod from "vue-super-call"
Vue.prototype.$super = VueSuperMethod

Vue.use(Vuex)

let store = new Vuex.Store({})

let app = new Vue({
        store,
        render: h => h(Editor)
}).$mount('#vue_app')
