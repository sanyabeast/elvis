<template>
        <div 
        >

        </div>
</template>
<script>

        import Vue from "vue"

        export default Vue.extend({
                name: "Draggable",
                data () {
                        return {
                                draggable_element_ref: null,
                                draggable_is_pointerdown: false,
                                draggable_prev_pointer_position: {
                                        x: 0,
                                        y: 0
                                },
                                draggable_current_translate: {
                                        x: 0,
                                        y: 0
                                }
                        }
                },
                mounted () {
                        console.log( "Draggable Mounted" )
                        this.on_draggable_pointerdown = this.on_draggable_pointerdown.bind(this)
                        this.on_draggable_pointerup =   this.on_draggable_pointerup.bind(this)
                        this.on_draggable_pointermove = this.on_draggable_pointermove.bind(this)

                        this.draggable_setup()
                },
                methods: {
                        draggable_setup () {
                                if ( this.draggable_element_ref !== null ) {
                                        let element = this.$refs[this.draggable_element_ref]

                                        element.style.cursor = "move"

                                        console.log(element, 1)
                                        element.addEventListener( "mousedown", this.on_draggable_pointerdown )
                                        window.addEventListener( "mousemove",  this.on_draggable_pointermove )
                                        window.addEventListener( "mouseup",    this.on_draggable_pointerup )
                                }
                        },
                        on_draggable_pointerdown ( evt ) {
                                console.log(1)
                                
                                let x = evt.pageX
                                let y = evt.pageY

                                this.draggable_prev_pointer_position.x = x
                                this.draggable_prev_pointer_position.y = y

                                this.draggable_is_pointerdown = true
                        },
                        on_draggable_pointermove ( evt ) {
                                if (this.draggable_is_pointerdown) {
                                        let x = evt.pageX
                                        let y = evt.pageY

                                        let delta_x = x - this.draggable_prev_pointer_position.x
                                        let delta_y = y - this.draggable_prev_pointer_position.y

                                        this.draggable_prev_pointer_position.x = x
                                        this.draggable_prev_pointer_position.y = y

                                        this.draggable_move(delta_x, delta_y)
                                }
                        },
                        on_draggable_pointerup () {
                                this.draggable_is_pointerdown = false
                        },
                        draggable_move ( x, y ) {
                                this.draggable_current_translate.x += x
                                this.draggable_current_translate.y += y

                                this.$el.style.transform = `translate(${this.draggable_current_translate.x}px, ${this.draggable_current_translate.y}px)`
                        },
                },
                
                beforeDestroy () {
                        console.log( "Draggable Destroy" )
                }
        })

</script>
<style lang="scss">

</style>