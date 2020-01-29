let mutations = {
    GET_WAREHOUSES(state, warehouses) {
        state.warehouses = warehouses;
    },
    GET_PRODUCTS(state, products) {
        state.products = products
    },
    NEW_PRODUCT(state, newProduct) {
        state.products.push(newProduct)
    },
    DELETE_PRODUCT(state, product) {
        let index = state.products.indexOf(product)
        if(index != -1){ state.products.splice(index, 1) }
    },
    UPDATED_STATE(state, updatedProduct) {
        let index = state.products.indexOf(updatedProduct)
        state.products[index].state = updatedProduct.state
    },
    SET_QUERY(state, query) {
        state.filter.query = query
    }
}
 
export default mutations