<template>
<div class="row mt-5">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Tabla de Productos</h2>
                    <div class="card-tools">
                        <button class="btn btn-primary mb-2" @click="addProduct">Agregar Nuevo</button>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Bodega</th>
                                <th>Estado</th>
                                <th><div class="col-md-1">
                                        <search-product v-bind:filter="filter"></search-product>
                                    </div>
                                </th>
                            </tr>
                            <tr v-for="product in filterProducts" :key="product.id">
                                <td>{{product.id}}</td>
                                <td>{{product.name}}</td>
                                <td>{{product.description}}</td>
                                <td>{{product.quantity}}</td>
                                <td>{{product.warehouses_id}}</td>
                                <td>{{product.state}}
                                    
                                </td>
                                <td>
                                    <div>
                                        <button class="btn btn-warning" @click="updateState(product)">Cambiar Estado</button>
                                        <button @click="deleteProduct(product)" class="btn btn-danger">Eliminar</button>
                                        <update-state v-bind:product="updateProduct"></update-state>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</div>    
</template>
<script>
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            productModal: {},
            updateProduct: {}
        }
    },
    props: ["filterProducts", "filter"],
    methods: {
        addProduct() {
            $("#addNew").modal("show");
        },
        deleteProduct(product) {
            Swal.fire({
                title: '¿Está seguro de eliminarlo?',
                text: "No podra revertirlo despues!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, borrarlo!'
                }).then((result) => {
                    if (result.value) {
                        this.$store.dispatch("DELETE_PRODUCT", product)
                        Swal.fire(
                        'Borrado!',
                        'El producto ha sido eliminado.',
                        'success'
                        )
                    }
                })
        },
        updateState(product) {
            this.updateProduct = product
            $("#updateState").modal("show")
        }
    }
}
</script>