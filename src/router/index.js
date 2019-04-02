import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld/HelloWorld'
import Index from '@/pages/index/index'
import writeArticle from '@/pages/writeArticle/writeArticle'
import articleDetail from '@/pages/articleDetail/articleDetail'
import articleForSeriesList from '@/pages/articleForSeriesList/articleForSeriesList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/writeArticle',
            name: 'writeArticle',
            component: writeArticle
        },
        {
            path: '/articleDetail',
            name: 'articleDetail',
            component: articleDetail
        },
        {
            path: '/articleForSeriesList',
            name: 'articleForSeriesList',
            component: articleForSeriesList
        }
    ]
})
