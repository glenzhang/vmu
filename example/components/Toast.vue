<template>
  <vmu-toast :text="toastText" :show="showToast">
  </vmu-toast>
</template>

<script>
export default {
  data() {
    return {
      toastText: 'Welcome to Your Vue.js App',
      showToast: true
    }
  },

  methods: {
    openToast(text) {
      this.toastText = text;
      this.showToast = true;
    }
  },

  mounted() {
    let self = this;
    setTimeout(() => {
      self.openToast("5s后的值");
    }, 5000)
  }
}
</script>

<style scoped>

</style>
