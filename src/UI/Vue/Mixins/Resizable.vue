<template>
        <div 
        >

        </div>
</template>
<script>

        import Vue from "vue"

        export default Vue.extend({
                name: "Resizable",
                data () {
                        return {
                                resizable_size: {
                                        x: 100,
                                        y: 100
                                }
                        }
                },
                mounted () {
                        console.log( "Resizable Mounted" )
                },
                methods: {
                        set_size ( x, y ){
                                this.resizable_size.x = x
                                this.resizable_size.y = y
                        }
                },
                
                beforeDestroy () {
                        console.log( "Resizable Destroy" )
                }
        })

</script>
<style lang="scss">

</style>