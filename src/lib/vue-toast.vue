<template>
    <section class="toast-container">
        <div class="toast" :class="[visible ? 'fade-in':'fade-out', {'default': type=='default'},{'success': type=='success'}, {'error': type=='error'}]">
            <span>{{message}}</span>
        </div>
    </section>
</template>
<script type="text/ecmascript-6">
    export default{
        data() {
            return {
                visible: false,
                message: '',
                type: 'default'
            }
        }
    };
</script>
<style rel="stylesheet/stylus" lang="stylus">
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: scale(0.7);
        }
        100% {
            opacity: 1;
            transfrom: scale(1)
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transfrom: scale(0.7)
        }
    }
    .toast-container
        position: absolute
        left: 0
        top: 0
        bottom: 0
        right: 0
        z-index: 2000
        display: flex
        justify-content: center
        align-items: center
        .toast
            width: 180px
            height: 60px
            line-height: 60px
            text-align: center
            border-radius: 10px
            color: #fff
            &.default
                background-color: #000
            &.success
                background-color: green
                color: #fff
            &.error
                color: #fff
                background-color: red
        .fade-in
            animation-name: fade-in
            animation-duration: 0.3s
            animation-fill-mode: both
        .fade-out
            animation-name: fade-out
            animation-duration: 0.3s
            animation-fill-mode: both
</style>