<script>
import Vue from "vue"
export default Vue.extend({
        name: "BasicComponent",
        props: {
                basic_component: {
                        type: Object,
                        default: ()=> {
                                return {
                                        id: ""
                                }
                        }
                }
        }
})
</script>