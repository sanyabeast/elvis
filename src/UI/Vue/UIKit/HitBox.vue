<template>
                <div 
                        class="uikit___hitbox"
                >

                </div>
</template>
<script>
import Vue from "vue"
export default Vue.extend({
        name: "HitBox",
        props: {
                button_icon_enabled: { type: Boolean, default: ()=> false },
                button_icon_src: { type: String, default: ()=> "" },
                button_caption_enabled: { type: Boolean, default: ()=> true },
                button_caption_text: { type: String, default: ()=> "BUTTON" }
        }
})
</script>
<style lang="scss">
        .uikit___hitbox {
                width: 100%;
                height: 100%;
                background-color: transparent;
        }
</style>