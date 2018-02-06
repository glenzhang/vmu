import Vue from 'vue';
import SingleHelper from './util/singlehelper';
import Toast from '../packages/toast';

const vmu = {

};

const install = function(Vue, opts = {}) {
    if (install.installed) {
        return;
    }

    Object.keys(vmu).forEach((key) => {
        Vue.component(vmu[key].name, vmu[key]);
    });

    Vue.prototype.$toast = SingleHelper.toast;
};

//主动注册
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default Object.assign(vmu, { install });