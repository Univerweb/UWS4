<template>
  <main>
    <HomeWelcome :headline="headline" :lead="lead" />
    <AppWorks :headline="worksPage.headline" :works="works" :h1="h1" :like-h1="likeH1" :h2="h2" :more="more" />
    <AppRequest :home="likeH1" />
  </main>
</template>

<script>
export default {
  props: {
    h1: {
      type: String,
      default: 'h2'
    },
    likeH1: {
      type: String,
      default: 'h1'
    },
    h2: {
      type: String,
      default: 'h3'
    },
    more: {
      type: String,
      default: 'div'
    }
  },

  async asyncData({ $content, app }) {
    const { title, description, headline, lead } = await $content(app.i18n.locale, 'home').fetch()
    const worksPage = await $content(app.i18n.locale, 'works').only('headline').fetch()
    const works = await $content(app.i18n.locale, 'works_slug').limit(6).sortBy('position', 'desc').fetch()
    return {
      title,
      description,
      headline,
      lead,
      worksPage,
      works
    }
  },

  head() {
    return {
      titleTemplate: `${this.$t('name')} — ${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description }
      ]
    }
  }
}
</script>
