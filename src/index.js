import Toast from './components/toast';
import TogglePanel from './components/togglepanel';

const vmu = {
    Toast,
    TogglePanel
};

const install = function(Vue, opts = {}) {
    if (install.installed) {
        return;
    }
    Object.keys(vmu).forEach((key) => {
        Vue.component(vmu[key].name, vmu[key]);
    });
};

//主动注册
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default Object.assign(vmu, { install });