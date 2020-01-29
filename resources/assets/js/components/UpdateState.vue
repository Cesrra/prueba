<template>
<div 
  class="modal fade" 
  id="updateState" 
  tabindex="-1" 
  role="dialog" 
  aria-labelledby="updateStateLabel" 
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateStateLabel">Cambiar estado del producto  <strong>{{ product.name }}</strong></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <p>Seleccione el nuevo estado:</p>
          <input type="radio" value="active" name="state" v-model="newState" 
          :checked="product.state == 'activo' ? 'checked' : ''"
          />Activo
          <br>
          <input type="radio" value="inactive" name="state" v-model="newState" 
          :checked="product.state == 'inactive' ? 'checked' : ''"
          />Inactivo
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-success" v-on:click="saveStateProduct(product)">Cambiar</button>
        </div>
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
      newState: ''
    }
  },
  props: ['product'],
  mounted() {
  },
  methods: {
    saveStateProduct(updatedProduct) {
      Swal.fire({
      title: '¿Está seguro de cambiarlo?',
      text: "No podra revertirlo despues!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cambiarlo!'
      }).then((result) => {
        if (result.value) {
            updatedProduct.state = this.newState
            this.$store.dispatch("UPDATE_STATE", updatedProduct)
            Swal.fire(
            'Cambiado!',
            'El estado ha sido cambiado.',
            'success'
            )
        }
        $("#updateState").modal("hide")
      })

    }
  }
}
</script>