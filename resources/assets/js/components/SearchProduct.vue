<template>
    <div class="container col-md-3">
        <input type="text" v-model="search" placeholder="Buscar"/>
    </div>
</template>

<script>
export default {
    props: ["filter"],
    computed: {
        search: {
            get() {
                return this.filter
                
            },
            set(val) {
                let value = val.toLowerCase()
                this.$store.dispatch("SET_QUERY", value)
            }
        }
    }
}
</script>