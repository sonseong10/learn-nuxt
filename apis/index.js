import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:3000' })

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductsSearchByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}

function fetchCartItem() {
  return instance.get('/carts')
}

function createCartItem(product) {
  return instance.post('/carts', product)
}

export {
  fetchProductById,
  fetchProductsSearchByKeyword,
  fetchCartItem,
  createCartItem,
}
