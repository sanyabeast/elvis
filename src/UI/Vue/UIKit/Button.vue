<template>
                <div 
                        class="uikit___button"
                        @click="$emit('click')"
                >
                        <div 
                                v-if="uikit_button.icon_enabled"
                                class="icon" 
                                :src="uikit_button.icon_src">
                        </div>
                        <div 
                                class="caption"
                                v-if="uikit_button.caption_enabled"
                                v-html="uikit_button.caption_text">
                        </div>
                        <hit-box/>
                </div>
</template>
<script>
import Vue from "vue"
import BasicComponent from "../Mixins/BasicComponent.vue"
import HitBox from "./HitBox.vue"

export default Vue.extend({
        name: "Button",
        mixins: [ BasicComponent ],
        components: { HitBox },
        props: {
                uikit_button: {
                        type: Object,
                        default: ()=> {
                                return { 
                                        icon_enabled: false,
                                        icon_src: "",
                                        caption_enabled: true,
                                        caption_text: "Button",
                                }
                        }
                }
        }
})
</script>
<style lang="scss">
        .uikit___button {
                cursor: pointer;
        }
</style>