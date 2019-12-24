<template>
        <div 
                class="window_system___window"
                v-bind:style="{
                        width: `${this.resizable_size.x}px`,
                        height: `${this.resizable_size.y}px`,
                }">
                <div 
                        class="window_system___resize_border"
                        ref="resize_border"
                >

                </div>
                <div class="window_system___window___window_content">
                        <div 
                                ref="header"
                                class="window_system___header">
                                <div 
                                        class="window_system___header___caption"
                                        v-html="window_caption">

                                </div>
                                <div class="window_system___window_controls">
                                        <Button
                                                button_caption_text="✕"
                                        />
                                </div>
                        </div>
                        <div
                                ref="content"
                                class="window_system___window___content">
                        </div>
                </div>
        </div>
</template>
<script>

        import Vue from "vue"
        import Draggable from "../Mixins/Draggable.vue"
        import Resizable from "../Mixins/Resizable.vue"
        import UserResizable from "../Mixins/UserResizable.vue"
        import Button from "../UIKit/Button.vue"

        export default Vue.extend({
                name: "Window",
                mixins: [ Draggable, UserResizable ],
                components: { Button },
                data () {
                        return {
                                draggable_element_ref: "header",
                                user_resizable_element_ref: "resize_border",
                                resizable_size: {
                                        x: 250,
                                        y: 250
                                }
                        }
                },
                props: {
                        window_caption: { type: String, default: ()=> "Window" }
                },
                mounted () {
                        console.log( "Window Mounted" )
                },
                methods: {
                        
                }
        })

</script>
<style lang="scss">
        $border_light:#eeeeee;
        $header_background: #969696;
        $content_color: #cecece;

        .window_system___window {
                position: absolute;
                top: 0;
                left: 0;
                width: 200px;
                height: 200px;
                display: flex;
                flex-direction: column;
                // position: relative;

                .window_system___resize_border {
                        position: absolute;
                        width: calc(100% + 16px);
                        height: calc(100% + 16px);
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: transparent;
                }

                .window_system___window___window_content {
                        
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 1px solid $border_light;

                        .window_system___header {
                                width: 100%;
                                height: 40px;
                                border-bottom: 1px solid $border_light;
                                background-color: $header_background;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                padding: 0 16px;
                                position: relative;

                                .window_system___header___caption {
                                        font-weight: 600;
                                }

                                .window_system___window_controls {
                                        height: 100%;
                                        position: absolute;
                                        right: 0;
                                        top: 0;
                                        display: flex;
                                        flex-direction: row;
                                        align-items: center;

                                        .uikit___button {
                                                height: 30px;
                                                width: 30px;
                                        }
                                }
                        }

                        .window_system___window___content {
                                flex-grow: 1;
                                background: $content_color;
                        }
                }

                
        }
</style>