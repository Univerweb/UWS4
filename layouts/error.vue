<template>
  <main class="container hero error">
    <h1>{{ $t('error.headline') }}</h1>
    <p v-if="error.statusCode === 404" class="lead">{{ $t('error.404') }}</p>
    <p v-else class="lead">{{ $t('error.500') }}</p>
  </main>
</template>

<script>
export default {
  layout: 'secondary',

  props: {
    error: {
      type: Object,
      default: null
    }
  },

  head() {
    return {
      titleTemplate: `${this.error.statusCode} — ${this.$t('name')}`,
      meta: [{ name: 'robots', content: 'noindex, follow' }]
    }
  }
}
</script>

<style lang="scss">
.hero.error {
  grid-auto-rows: auto auto;
  justify-items: center;
  align-content: center;
  min-height: calc(100vh);
}
</style>
