<template>
        <div class="elvis_editor">
                <Window 

                />     

                <Window 

                />   

                <Window 

                />          

                <Window 

                />   

                <Window 

                />   

                <Window 

                />   
        </div>    
        
</template>
<script>

        import Vue from "vue"
        
        /**Window System */
        import Window from "./WindowManager/Window.vue"

        export default Vue.extend({
                name: "Editor",
                components: { Window },
                mounted () {
                        console.log("Editor Mounted")
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

        .elvis_editor {
                width: 100%;
                height: 100%;
                background: #290000;
                box-sizing: border-box;
                

                * {
                        font-family: 'Montserrat', sans-serif;
                        box-sizing: border-box;
                        user-select: none;
                }
        }
</style>