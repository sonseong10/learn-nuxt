import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:3000' })

export function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}
