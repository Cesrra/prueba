let state = {
    warehouses: [],
    products: [],
    filter: {
        query: ''
    },
    newProduct: {
        name: '',
        description: '',
        warehouses_id: 1,
        quantity: 0,
        state: 'active',
        id: 0
    }    
}

export default state;