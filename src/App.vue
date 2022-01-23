<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'sample-vue-app',
  mounted() {
    this.registerGlobalListeners()
  },
  methods: {
    registerGlobalListeners() {}
  }
}
</script>

<style lang="scss">
  body {
    height: 100%;
    width: 100%;
    min-height: 100vh;
  }
</style>
