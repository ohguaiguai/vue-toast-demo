/**
 * Created by admin on 17/11/14.
 */
import ToastComponent from './vue-toast.vue';

let Toast = {};

Toast.install = function(Vue, options) {

    let opt = {
        duration: 3000
    }
    // 覆盖默认选项 (全局, 可能在main.js里面全局使用了)
    for(let key in options) {
        opt[key] = options[key];
    }

    Vue.prototype.$toast = function(message, option) {
        // 优先局部(在组件中使用)
        if(typeof option == 'object') {
            for(let key in option) {
                opt[key] = option[key];
            }
        }

        const ToastController = Vue.extend(ToastComponent);// 继承ToastComponent

        let instance = new ToastController().$mount(document.createElement('div'));// 拿到instance后就可以操作export default中的内容

        instance.message = message;
        instance.visible = true;
        instance.type = opt.type;

        console.log(instance);
        document.body.appendChild(instance.$el);

        setTimeout(() => {
            instance.visible = false;
            document.body.removeChild(instance.$el);
        }, opt.duration);
    }
    Vue.prototype.$toast['show'] = function(message, option) {
        Vue.prototype.$toast(message, option);
    }
}
// 如果引入了vue就用Vue.use(Toast)这种方式使用插件
if(typeof window !== 'undefined' && window.Vue) {
    Vue.use(Toast);
}
export default  Toast;