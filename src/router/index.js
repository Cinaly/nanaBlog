import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld/HelloWorld'
import Main from '@/pages/main/main'
import writeArticle from '@/pages/writeArticle/writeArticle'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/main',
            name: 'main',
            component: Main
        },
        {
            path: '/writeArticle',
            name: 'writeArticle',
            component: writeArticle
        },
    ]
})
