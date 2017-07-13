<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
    <Toast :toastText="toastText" :showToast="showToast"></Toast>
  </div>
</template>

<script>
import Vue from 'vue';
import Toast from '@/packages/toast';

Vue.use(Toast);

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toastText: 'Welcome to Your Vue.js App',
      showToast: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.toastText = "5s后的值";
      this.showToast = true;
    } , 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
