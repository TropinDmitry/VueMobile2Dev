<script setup lang="ts">
import Header from './components/Header.vue';
import MobileEditorPage from './pages/MobileEditorPage.vue';
</script>

<template>
  <div>
    <Header />

    <main>
      <MobileEditorPage />
    </main>
  </div>

</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  display: flex;
  place-items: center;
}

main {
  height: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
