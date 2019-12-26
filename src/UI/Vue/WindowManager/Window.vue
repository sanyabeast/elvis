<template>
        <div 
                class="window_system___window"
                @click="on_clicked"
                v-bind:class="{
                        fx_enabled: $store.state.editor.fx_enabled
                }"
                v-bind:style="{
                        width: `${this.resizable_data.size.x}px`,
                        height: `${this.resizable_data.size.y}px`,
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
                                        v-html="xwindow.caption">

                                </div>
                                <div class="window_system___window_controls">
                                        <Toolbar
                                                :uikit_toolbar="{
                                                        buttons: window_data.controls_buttons
                                                }"
                                                @button_click="on_controls_toolbar_click"
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
        import Toolbar from "../UIKit/Toolbar.vue"

        export default Vue.extend({
                name: "Window",
                mixins: [ Draggable, UserResizable, Toolbar ],
                components: { Button },
                data () {
                        return {
                                draggable_data: {
                                        draggable_el_ref: "header"
                                },
                                user_resizable_data: {
                                        user_resizable_element_ref: "resize_border",
                                },
                                resizable_data: {
                                        size: {
                                                x: 250,
                                                y: 250
                                        },
                                        min_size: {
                                                x: 250,
                                                y: 250
                                        }
                                },
                                window_data: {
                                        controls_buttons: {
                                                minimize: {
                                                        button_props: {
                                                                caption_enabled: true,
                                                                caption_text: "_" 
                                                        }
                                                        
                                                },
                                                close: {
                                                        button_props: {
                                                                caption_enabled: true,
                                                                caption_text: "✕" 
                                                        }
                                                        
                                                }
                                        }
                                }
                        }
                },
                props: {
                        xwindow: {
                                type: Object,
                                default: ()=> {
                                        return {
                                                caption: "Window"
                                        }
                                }
                        }
                },
                mounted () {
                        console.log( "Window Mounted" )
                },
                methods: {
                        on_controls_toolbar_click ( p ) {
                                this.$emit(`user_requests_${p.button_id}`)
                        },
                        on_clicked () {
                                this.$emit("click", {
                                        xwindow: this
                                })
                        }
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
                                height: calc(100% - 40px);
                        }
                }

                &.fx_enabled {
                        .window_system___window___window_content {
                                box-shadow: 0px 0px 16px 8px #00000026;
                        }
                }
                
        }
</style>