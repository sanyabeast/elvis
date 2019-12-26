<template>
        <div class="lure_editor">
                <WindowManager
                        ref="window_manager"
                />
                <div v-html="test_message"></div>
        </div>    
        
</template>
<script>

        import Vue from "vue"
        
        import AppComponent from "../AppComponent.vue"

        /**Window System */
        import WindowManager from "../../UI/Vue/WindowManager/WindowManager.vue"
        import Window from "../../UI/Vue/WindowManager/Window.vue"

        export default Vue.extend({
                name: "Editor",
                mixins: [ AppComponent ],
                components: { WindowManager, Window },
                props: {
                        test_message: { type: String, default: ()=> "" }
                },
                data () {
                        return {
                                kek: 1
                        }
                },
                mounted () {
                        console.log("Editor Mounted")

                        for ( var a = 0; a < 3; a++ ) {
                                this.$refs["window_manager"].create_window()
                        }
                }
        })

</script>
<style lang="scss">
        html, body {
                width: 100%;
                height: 100%;
                overflow: hidden;
                margin: 0;
        }

        .lure_editor {
                width: 100%;
                height: 100%;
                background: #949494;
                box-sizing: border-box;
                

                * {
                        font-family: 'Montserrat', sans-serif;
                        box-sizing: border-box;
                        user-select: none;
                }
        }
</style>