import state from "./state";

let getters = {
    warehouses: state => {
        return state.warehouses;
    },
    products: state => {
        return state.products
    },
    newProduct: state => {
        return state.newProduct
    },
    filterProducts: state => {
        let products = state.products
        if(state.filter.query.length > 0) {
            return products.filter(product => product.name.toLowerCase().includes(state.filter.query))
        }
        return products
    },
    filter: state => {
        return state.filter.query
    }
}

export default getters