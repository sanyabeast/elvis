<template>
                <div 
                        class="uikit___button"
                >
                        <div 
                                v-if="button_icon_enabled"
                                class="icon" 
                                :src="button_icon_src">
                        </div>
                        <div 
                                class="caption"
                                v-if="button_caption_enabled"
                                v-html="button_caption_text">
                        </div>
                        <hit-box/>
                </div>
</template>
<script>
import Vue from "vue"
import HitBox from "./HitBox.vue"

export default Vue.extend({
        name: "Button",
        components: { HitBox },
        props: {
                button_icon_enabled: { type: Boolean, default: ()=> false },
                button_icon_src: { type: String, default: ()=> "" },
                button_caption_enabled: { type: Boolean, default: ()=> true },
                button_caption_text: { type: String, default: ()=> "BUTTON" }
        }
})
</script>
<style lang="scss">
        .uikit___button {
                cursor: pointer;
        }
</style>