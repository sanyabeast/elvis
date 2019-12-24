<template>
        <div 
        >

        </div>
</template>
<script>

        import Vue from "vue"
        import Resizable from "./Resizable.vue"

        export default Vue.extend({
                name: "UserResizable",
                mixins: [ Resizable ],
                data () {
                        return {
                                user_resizable_element_ref: null,
                                user_resizable_is_pointerdown: false,
                                user_resizable_prev_pointer_position: {
                                        x: 0,
                                        y: 0
                                },
                                user_resizable_direction: {
                                        x: 0,
                                        y: 0
                                }
                        }
                },
                mounted () {
                        console.log( "UserResizable Mounted" )
                        this.on_user_resizable_pointerdown = this.on_user_resizable_pointerdown.bind(this)
                        this.on_user_resizable_pointerup =   this.on_user_resizable_pointerup.bind(this)
                        this.on_user_resizable_pointermove = this.on_user_resizable_pointermove.bind(this)

                        this.user_resizable_setup()
                },
                methods: {
                        detect_resize_direction ( x, y ) {
                                let el = this.$refs[this.user_resizable_element_ref]
                                let box = el.getBoundingClientRect()

                                let direction_x = 0
                                let direction_y = 0

                                if (x < box.x + 20 ) direction_x = -1
                                if (x > box.x + box.width - 20 ) direction_x = 1
                                if (y < box.y + 20 ) direction_y = -1
                                if (y > box.y + box.height - 20 ) direction_y = 1

                                this.user_resizable_direction.x = direction_x
                                this.user_resizable_direction.y = direction_y

                                if (this.user_resizable_direction.x!==0 &&this.user_resizable_direction.y!==0){
                                        el.style.cursor = "nesw-resize"
                                } else {
                                        if (this.user_resizable_direction.x !==0){
                                                el.style.cursor = "e-resize"
                                        }

                                        if (this.user_resizable_direction.y!==0){
                                                el.style.cursor = "n-resize"
                                        }

                                        if (this.user_resizable_direction.x===0&&this.user_resizable_direction.y===0){
                                                el.style.cursor = "default"
                                        }
                                }

                        },
                        user_resizable_setup () {
                                if ( this.user_resizable_element_ref !== null ) {
                                        let element = this.$refs[this.user_resizable_element_ref]

                                        element.addEventListener( "mousedown", this.on_user_resizable_pointerdown )
                                        window.addEventListener( "mousemove",  this.on_user_resizable_pointermove )
                                        window.addEventListener( "mouseup",    this.on_user_resizable_pointerup )
                                }
                        },
                        on_user_resizable_pointerdown ( evt ) {
                                
                                let x = evt.pageX
                                let y = evt.pageY

                                this.detect_resize_direction( x, y )

                                this.user_resizable_prev_pointer_position.x = x
                                this.user_resizable_prev_pointer_position.y = y

                                this.user_resizable_is_pointerdown = true
                        },
                        on_user_resizable_pointermove ( evt ) {
                                if (this.user_resizable_is_pointerdown) {
                                        let x = evt.pageX
                                        let y = evt.pageY

                                        let delta_x = x - this.user_resizable_prev_pointer_position.x
                                        let delta_y = y - this.user_resizable_prev_pointer_position.y

                                        this.user_resizable_prev_pointer_position.x = x
                                        this.user_resizable_prev_pointer_position.y = y

                                        this.user_resizable_resize(delta_x, delta_y)
                                }
                        },
                        on_user_resizable_pointerup () {
                                this.user_resizable_is_pointerdown = false
                        },
                        user_resizable_resize ( x, y ) {
                                let current_size_x = this.resizable_size.x
                                let current_size_y = this.resizable_size.y

                                current_size_x += (this.user_resizable_direction.x * x)
                                current_size_y += (this.user_resizable_direction.y * y)

                                this.set_size(current_size_x, current_size_y)
                        },
                },
                beforeDestroy () {
                        console.log( "UserResizable Destroy" )
                }
        })

</script>
<style lang="scss">

</style>