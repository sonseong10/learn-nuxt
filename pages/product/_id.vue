<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <header class="side-header">
          <p class="name">{{ product.name }}</p>
        </header>

        <div class="side-body">
          <p class="price">{{ product.price }}</p>
        </div>

        <footer class="side-footer">
          <button class="btn" type="button" @click="moveToCartPage">
            Add Cart
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/apis/index'

export default {
  async asyncData({ params }) {
    const id = params.id
    const res = await fetchProductById(id)
    const product = res.data
    return { product }
  },

  methods: {
    moveToCartPage() {
      this.$store.commit('addToCart', this.product)
      this.$router.push(`/cart`)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.product-image {
  width: 500px;
  height: 375px;
}

.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}

.side-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 100%;
  height: 36px;
  font-size: 1rem;
  font-weight: 700;
}
</style>
