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
}
