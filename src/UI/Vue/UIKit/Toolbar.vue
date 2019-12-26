<template>
                <div 
                        class="uikit___toolbar"
                >
                        <UIKitButton
                                v-for="(item, index) in uikit_toolbar.buttons"
                                :key="index"
                                :uikit_button="item.button_props"
                                :basic_component="{
                                        id: index
                                }"
                                @click="$emit('button_click', {
                                        button_id: index
                                })"
                        />
                </div>
</template>
<script>
import Vue from "vue"
import UIKitButton from "./Button.vue"

export default Vue.extend({
        name: "Toolbar",
        components: { UIKitButton },
        props: {
                uikit_toolbar: {
                        type: Object,
                        default: ()=> {
                                buttons: {}
                        } 
                }
        }
})
</script>
<style lang="scss">
        .uikit___toolbar {
                width: 100%;
                height: 36px;
                display: flex;
                flex-direction: row;
                align-items: center;

                button {
                        width: 36px;
                        height: 36px;
                }
        }
</style>