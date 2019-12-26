import LureApp from "../../Utils/LureApp.js"
import EditorComponent from "./EditorAppComponent.vue"

class EditorApp extends LureApp {
        get_build_data () {
                return {
                        vue_component_class: EditorComponent,
                        store_data: {
                                state: {
                                        editor: {
                                                fx_enabled: true
                                        }
                                }
                        }
                }
        }
}

export default EditorApp