import Toast from './src/main';
import SingleHelper from '../../src/util/singlehelper'

Toast.install = function(Vue) {
    Vue.component(Toast.name, Toast);
    //Vue.prototype.$toast = SingleHelper(Toast);
};

export default Toast;