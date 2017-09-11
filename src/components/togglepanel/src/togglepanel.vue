<template>
    <transition>
        <slot v-if="show"></slot>
    </transition>
</template>

<script>
export default {
    name: 'VmuTogglePanel',

    data() {
        return {
            show: true
        }
    },

    props: ['direction'],

    mounted() {
        console.log(this);
        console.log(this.$el);
    }
}
</script>

<style scoped>
.effect {
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>
