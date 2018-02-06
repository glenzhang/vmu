<template>
  <button @click="openToast" >打开Toast</button>
</template>

<script>
export default {
  data() {
    return {
      toastText: "Welcome to Your Vue.js App"
    };
  },

  methods: {
    openToast() {
      //console.log(this.$toast);
      this.$toast(this.toastText);
    }
  }
};
</script>
