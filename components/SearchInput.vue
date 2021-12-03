<template>
  <form class="input-wrapper flex" @submit.prevent="searchForm">
    <input
      class="search-input"
      type="text"
      :value="keyword"
      @input="$emit('input', $event.target.value)"
    />
    <button class="btn" type="submit">search</button>
  </form>
</template>

<script>
export default {
  model: {
    prop: 'keyword',
  },
  props: {
    keyword: {
      type: String,
      default: () => '',
    },
  },

  methods: {
    searchForm() {
      this.$emit('search')
    },
  },
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}

.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid #666;
  border-right: 0;
}

.btn {
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
