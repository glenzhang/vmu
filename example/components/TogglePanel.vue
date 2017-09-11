<template>
  <div>
    <button class="btn" @click="clickHandler">up</button>

    <vmu-toggle-panel :direction="direction">
      <div>test{{show}}</div>
    </vmu-toggle-panel>
  </div>
</template>

<script>
export default {

  data() {
    return {
      show: 1,
      direction: "up"
    }
  },

  methods: {
    clickHandler() {
      console.log(1);
    }
  }

}
</script>

<style scoped>
.btn {
  width: 2rem;
  height: .5rem;
  border: 1px solid #ccc;
  border-radius: .1rem;
  background-color: #fff;
  outline: none;
}
</style>