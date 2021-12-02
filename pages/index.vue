<template>
  <div class="app">
    <main>
      <div>
        <input type="text" />
      </div>
      <div>
        <ul>
          <li
            v-for="product in products"
            :key="product.id"
            class="product-item flex"
            @click="moveToDetailPage(product.id)"
          >
            <img
              class="product-image"
              :src="product.imageUrl"
              :alt="product.name"
            />
            <p>{{ product.name }}</p>
            <span>{{ product.price }}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  async asyncData() {
    const res = await axios.get('http://localhost:3000/products')
    const products = res.data.map((item) => ({
      ...item,
      imageUrl: `https://picsum.photos/640/480?random=${Math.random()}`,
    }))
    return { products }
  },

  methods: {
    moveToDetailPage(id) {
      this.$router.push(`product/${id}`)
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

.product-item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}

.product-image {
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}
</style>
