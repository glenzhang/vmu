<template>
    <div class="vmu-text-toast" :class="isShow">
        <div class="vmu-text-toast-content" v-html="content">{{content}}</div>
    </div>
</template>

<script>
export default {
  name: "VmuToast",

  data() {
    return {
      content: "hhhh",
      visible: true
    };
  },
  
  open(content) {
    this.content = content;
    this.visible = false;
  },

  computed: {
    isShow() {
      return this.visible ? "vmu-text-toast-on" : "";
    }
  },

  mounted() {
    this.$el.addEventListener(
      "webkitAnimationEnd",
      () => {
        this.content = "";
        this.visible = false;
      },
      false
    );
  }
};
</script>

<style lang="less" scoped>
.vmu-text-toast {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 50%;
  width: 100%;
  margin-top: -50px;
  opacity: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-transform: translateY(-10000px);
  text-align: center;
}
.vmu-text-toast-content {
  display: inline-block;
  margin: 0 5%;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  border-radius: 3px;
}
@-webkit-keyframes vmu-text-toast-on {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  20% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
  80% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
  98% {
    opacity: 0.1;
    -webkit-transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-10000px);
  }
}
@keyframes vmu-text-toast-on {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  98% {
    opacity: 0.1;
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    transform: translateY(-10000px);
  }
}
.vmu-text-toast-on {
  -webkit-animation-name: text-toast-on;
  animation-name: text-toast-on;
}
</style>