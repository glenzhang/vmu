import Toast from './components/toast';

const vmu = {
    Toast
};

const install = function (Vue, opts = {}) {
    Object.keys(vmu).forEach((key) => {
        Vue.component(key, vmu[key]);
    });
};

// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// };

export default Object.assign(vmu, {install});

