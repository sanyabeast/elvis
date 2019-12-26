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
                                resizable_data: {
                                        size: {
                                                x: 100,
                                                y: 100
                                        },
                                        min_size: {
                                                x: 100,
                                                y: 100
                                        }
                                }
                        }
                },
                mounted () {
                },
                methods: {
                        set_size ( x, y ){
                                if (x < this.resizable_data.min_size.x) x = this.resizable_data.min_size.x
                                if (y < this.resizable_data.min_size.y) y = this.resizable_data.min_size.y

                                this.resizable_data.size.x = x
                                this.resizable_data.size.y = y
                        },
                        get_size () {
                                return this.resizable_data.size
                        }
                },
                
                beforeDestroy () {
                }
        })

</script>
<style lang="scss">

</style>