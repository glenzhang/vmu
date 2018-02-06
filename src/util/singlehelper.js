/**
 * 工厂方法
 */
import Vue from 'vue';
import Toast from '../../packages/toast';

let instance;

const initInstance = (VueComp) => {
    let CompConstructor = Vue.extend(VueComp);

    instance = new CompConstructor({
        el: document.createElement('div')
    });

    document.body.appendChild(instance.$el);
}

const SingleHelper = () => {

}

SingleHelper.toast = function(content) {
    if (!instance) {
        initInstance(Toast);
    }
    instance.content = content;
    instance.visible = true;
}

export default SingleHelper;