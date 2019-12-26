import Vue from "vue"
import Vuex from "vuex"
import VueSuperMethod from "vue-super-call"
Vue.prototype.$super = VueSuperMethod

Vue.use(Vuex)

export default class LureApp {
        constructor ( props_data ) {
                this.vue_app = null

                let build_data = this.get_build_data()

                console.dir(build_data.vue_component_class)

                let store = new Vuex.Store(build_data.store_data)

                let vue_app = this.vue_app = new build_data.vue_component_class({
                      store,  
                      propsData: props_data
                })

        }

        get_build_data () {
                return {
                        vue_component_class: null,
                        store_data: {}
                }
        }

        mount ( target ) {
                this.vue_app.$mount( target )
                return this
        }

        static spawn_app ( AppClass, props_data, mount_target ) {
                return new AppClass( props_data ).mount( mount_target )
        }
}
