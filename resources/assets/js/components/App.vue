<template>
    <div class="container">
        <products-table v-bind:filterProducts="filterProducts" v-bind:filter="filter"></products-table>
        <add-product v-bind:newProduct="newProduct" v-bind:warehouses="warehouses"></add-product>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                editMode: false,
                productModal: {}
            }
        },
        mounted() {
            this.$store.dispatch("GET_WAREHOUSES")
            this.$store.dispatch("GET_PRODUCTS")

        },
        computed: {
            ...mapGetters(['warehouses', 'newProduct', 'filterProducts', 'filter'])
        }

    }
</script>
