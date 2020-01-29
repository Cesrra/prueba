let actions = {
    GET_WAREHOUSES({ commit }) {
        axios
            .get('/api/warehouses')
            .then(res => {
                commit("GET_WAREHOUSES", res.data)
            })
            .catch(err => {
                console.log(err)
            });
    },
    GET_PRODUCTS({ commit }) {
        axios
            .get('/api/products')
            .then(res => {
                commit("GET_PRODUCTS", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    ADD_PRODUCT({ commit }, newProduct) {
        axios
            .post('/api/product', newProduct)
            .then(res => {
                newProduct.id = res.data.id;
                commit("NEW_PRODUCT", newProduct)
            })
            .catch(err => {
                console.log(err)
            })
    },
    DELETE_PRODUCT({ commit }, product ) {
        axios
            .delete('/api/product/'+product.id)
            .then(res => {
                commit("DELETE_PRODUCT", product)
            })
            .catch(err => {
                console.log(err)
            })
    },
    UPDATE_STATE({ commit }, updatedProduct) {
        axios
            .patch('/api/product/'+updatedProduct.id,{state: updatedProduct.state })
            .then(res => {
                commit("UPDATED_STATE", updatedProduct)
            })
            .catch(err => {
                console.log(err)
            })
    },
    SET_QUERY({ commit }, value) {
        commit("SET_QUERY", value)
    }
}

export default actions