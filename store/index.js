import { fetchCartItem } from '~/apis'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addToCart(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `https://picsum.photos/640/480?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },

  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  },
}

export const actions = {
  async fetchCartList({ commit }) {
    const { data } = await fetchCartItem()
    const newItems = data.map((cartItem) => ({
      ...cartItem,
      imageUrl: `https://picsum.photos/640/480?random=${Math.random()}`,
    }))
    commit('setCartItems', newItems)
  },

  async nuxtServerInit({ dispatch }, nuxtContext) {
    await dispatch('fetchCartList')
  },
}
