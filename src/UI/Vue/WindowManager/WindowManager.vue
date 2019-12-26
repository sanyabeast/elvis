<template>
        <div 
                class="window_system___window_manager">
                <window
                        v-for="(item, index) in window_manager_data.windows"
                        :key="index"
                        @click="on_window_clicked(index)"
                        v-bind:style="{
                                zIndex: (window_manager_data.focused_window_index === index ? '1' : '0')
                        }"
                />
        </div>
</template>
<script>
import Vue from "vue"

import Window from "./Window.vue"

window.l= console.log.bind(console)

export default Vue.extend({
        name: "WindowManager",
        components: { Window },
        data () {
                return {
                        window_manager_data: {
                                windows: [],
                                focused_window_index: 0
                        }
                }
        },
        methods: {
                create_window () {
                        this.window_manager_data.windows.push({})
                },
                on_window_clicked ( index ) {
                        console.log(index)
                        this.focused_window_index = index
                }
        }
})
</script>
<style lang="scss">
        .window_system___window_manager {
                position: relative;
        }
</style>