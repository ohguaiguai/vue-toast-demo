/**
 * Created by admin on 17/11/14.
 */
import ToastComponent from './vue-toast.vue';

let Toast = {};
Toast.install = function(Vue, options) {

    var opt = {
        duration: 3000
    }
    // 覆盖默认选项 (全局)
    for(let key in options) {
        opt[key] = options[key];
    }

    Vue.prototype.$toast = function(message, option) {
        // 优先局部
        if(typeof option == 'object') {
            for(let key in options) {
                opt[key] = options[key];
            }
        }

        const ToastController = Vue.extend(ToastComponent);// 继承ToastComponent

        var instance = new ToastController().$mount(document.createElement('div'));// 拿到instance后就可以操作export default中的内容

        instance.message = message;
        instance.visible = true;

        document.body.appendChild(instance.$el);

        setTimeout(() => {
            instance.visible = false;
            document.body.removeChild(instance.$el);
        }, opt.duration);
    }
    Vue.prototype.$toast['show'] = function(message, option) {
        Vue.prototype.$toast(message, option);
    }
    Vue.prototype.$toast['success'] = function(message, option) {
        Vue.prototype.$toast(message, option);
    }
    Vue.prototype.$toast['error'] = function(message, option) {
        Vue.prototype.$toast(message, option);
    }
}
if(window.Vue) {
    Vue.use(Toast);
}
export default  Toast;