<template>
  <div class="app">
    <main>
      <SearchInput
        v-model="searchKeyword"
        @search="searchProduct"
      ></SearchInput>
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
    <div class="btn-wrapper">
      <button class="cart-btn" type="button" @click="moveToCartPage">
        Cart
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '~/components/SearchInput.vue'
import { fetchProductsSearchByKeyword } from '~/apis'

export default {
  components: { SearchInput },
  async asyncData() {
    const res = await axios.get('http://localhost:3000/products')
    const products = res.data.map((item) => ({
      ...item,
      imageUrl: `https://picsum.photos/640/480?random=${Math.random()}`,
    }))
    return { products }
  },

  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    moveToDetailPage(id) {
      this.$router.push(`product/${id}`)
    },

    moveToCartPage() {
      this.$router.push(`cart`)
    },

    async searchProduct() {
      const res = await fetchProductsSearchByKeyword(this.searchKeyword)
      this.products = res.data.map((item) => ({
        ...item,
        imageUrl: `https://picsum.photos/640/480?random=${Math.random()}`,
      }))
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

.btn-wrapper {
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
}

.cart-btn {
  padding: 8px;
  height: 46px;
  background-color: #00c58e;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  border: none;
  cursor: pointer;
}

.app {
  position: relative;
}
</style>
