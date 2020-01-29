<template>
<div 
  class="modal fade" 
  id="addNew" 
  tabindex="-1" 
  role="dialog" 
  aria-labelledby="addNewLabel" 
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addNerLabel">Agregar Producto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>Nombre</label>
          <input 
            type="text"
            autofocus="autofocus"
            placeholder="Nombre"
            class="new-product"
            v-model="newProduct.name"
          />
        </div>

        <div class="form-group">
          <label>Descripción</label>
          <textarea 
            placeholder="Descripción" 
            class="new-product"
            v-model="newProduct.description"
          ></textarea>
        </div>

        <div class="form-group">
          <label>Bodega</label>
          <select
            name="warehouse_id" 
            class="form-control"
            v-model="newProduct.warehouses_id"
          >
            <option
            v-for="(warehouse, index) in warehouses"
            :selected="index == 0 ? 'selected' : ''"
            :key="warehouse.id"
            :value="warehouse.id"
            >{{ warehouse.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Cantidad</label>
          <input type="number"
          placeholder="Cantidad"
          class="new-product"
          v-model="newProduct.quantity"
          /> 
        </div>

        <div class="form-group">
          <p>Seleccione el estado:</p>
          <input type="radio" value="active" name="state" v-model="newProduct.state"/>Activo
          <br>
          <input type="radio" value="inactive" name="state" v-model="newProduct.state"/>Inactivo
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-success" v-on:click="addProduct">Agregar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: ["newProduct", "warehouses"],
    methods: {
      addProduct() {
        this.$store.dispatch("ADD_PRODUCT", {
          name: this.newProduct.name,
          description: this.newProduct.description,
          warehouses_id: this.newProduct.warehouses_id,
          quantity: this.newProduct.quantity,
          state: this.newProduct.state
        })
        this.newProduct.name = ""
        this.newProduct.description = ""
        this.newProduct.warehouses_id = 0
        this.newProduct.quantity = null
        this.newProduct.state = "active"
        $("#addNew").modal("hide");
      }
    }
  }
</script>