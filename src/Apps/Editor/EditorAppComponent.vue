<template>
        <div class="lure_editor">
                <WindowManager
                        ref="window_manager"
                />
        </div>    
        
</template>
<script>

        import Vue from "vue"
        
        /**Window System */
        import WindowManager from "../../UI/Vue/WindowManager/WindowManager.vue"
        import Window from "../../UI/Vue/WindowManager/Window.vue"

        export default Vue.extend({
                name: "Editor",
                components: { WindowManager, Window },
                mounted () {
                        console.log("Editor Mounted")

                        for ( var a = 0; a < 10; a++ ) {
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