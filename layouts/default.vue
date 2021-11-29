<template>
  <div>
    <h1>{{ $route.name }}템플릿</h1>
    <header>
      <ul>
        <li>
          <NuxtLink to="/">홈</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/main">메인</NuxtLink>
        </li>
      </ul>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
