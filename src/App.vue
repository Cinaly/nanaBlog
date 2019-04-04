<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Verdana,Roboto,Noto,Helvetica Neue,sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        min-width: 750px;
        font-size: 18px;
        background: url("./assets/images/bg.jpg");
    }

</style>
