<template>
    <div id="app">
        <router-view v-if="isRouterAlive"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        provide: function () {
            return {
                reload: this.reload
            }
        },
        data: function () {
            return {
                isRouterAlive: true
            }
        },
        methods:{
            reload: function () {
                this.isRouterAlive = false;
                this.$nextTick(function () {
                    this.isRouterAlive = true;
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        min-width: 750px;
        font-size: 18px;
        background: url("./assets/images/bg.jpg");
    }

</style>
