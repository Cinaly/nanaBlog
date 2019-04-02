<template>
    <div>
        <my-header canWrite="true"></my-header>
        <article>
            <!--lbox begin-->
            <div class="lbox">
                <div class="zhuanti whitebg" v-for="(itemList,key) in allData" v-if="itemList.length>0">
                    <h2 class="htitle"><span class="hnav"><a href="javascript:;" @click="jumpWithParams('/articleForSeriesList', itemList[0]['series_id'])">更多</a></span>{{itemList[0]['series_name']}}
                    </h2>
                    <ul>
                        <li v-for="item in itemList">
                            <i class="ztpic">
                                <a href="javascript:;" @click="jumpWithParams('/articleDetail', item['id'])">
                                    <img :src="require('../../assets/images/' + getRandomImg() +'.jpg')">
                                </a>
                            </i>
                            <b>{{item.title}}</b>
                            <span>{{item.content}}</span>
                            <a href="javascript:;" class="readmore" @click="jumpWithParams('/articleDetail', item['id'])">文章阅读</a>
                        </li>
                    </ul>
                </div>
                <!--<div class="zhuanti whitebg">
                    <h2 class="htitle"><span class="hnav"><a href="/" target="_blank">更多</a></span>美文欣赏</h2>
                    <ul>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/1.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/2.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/3.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/4.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/h2.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/h1.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                    </ul>
                </div>
                <div class="zhuanti whitebg">
                    <h2 class="htitle"><span class="hnav"><a href="/" target="_blank">更多</a></span>程序人生</h2>
                    <ul>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/1.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/2.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/3.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/4.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/h2.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/h1.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                    </ul>
                </div>
                <div class="zhuanti whitebg">
                    <h2 class="htitle"><span class="hnav"><a href="/" target="_blank">更多</a></span>经典语录</h2>
                    <ul>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/1.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/2.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/3.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/4.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/h2.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/h1.jpg"></a></i>
                            <b>个人博客模板《今夕何夕》-响应式个人...</b><span>个人博客模板《今夕何夕》，宽屏响应式个人博客模板，采用冷色系为主，固定导航栏和侧边栏，无缝滚动图片...</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                    </ul>
                </div>-->

                <!--bloglist end-->
            </div>
            <div class="rbox">
                <div class="whitebg paihang">
                    <h2 class="htitle">文章分类</h2>
                    <section class="topnews imgscale"><img src="../../assets/images/h1.jpg"></section>
                    <ul>
                        <li v-for="item in typeList"><i></i><a href="/">{{item['type_name']}}</a></li>
                    </ul>
                </div>

                <div class="whitebg cloud">
                    <h2 class="htitle">标签云</h2>
                    <ul>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                        <a href="" target="_blank">标签1</a>
                    </ul>
                </div>

                <!--<div class="ad whitebg imgscale">
                    <ul>
                        <a href="/"><img src="../assets/images/b01.jpg"></a>
                    </ul>
                </div>-->

            </div>
        </article>
    </div>
</template>

<script>
    import axios from 'axios';
    import {HOST} from '@/host/index';
    import myHeader from '@/component/header/my_header';

    export default {
        name: 'index',
        components:{
            myHeader
        },
        data() {
            return {
                allData: [],
                typeList: [],
                imgLists: ['1', '2', '3', '4',
                    'b01', 'b02', 'b03', 'b04', 'b05',
                    'h1', 'h2',
                    'text01', 'text02', 'text03', 'text04', 'text05', 'text06', 'text07',
                ]
            }
        },
        created() {
            this.getArticleList();
            this.getTypeList();
        },
        mounted() {
        },
        methods: {
            getArticleList() {
                axios.get(HOST['CONFIG_URL_API'] + '/api/getArticleList').then((res) => {
                    console.log('-----', res.data);
                    this.allData = res.data['data'];
                    console.log(this.allData);
                });
            },
            getTypeList() {
                axios.get(HOST['CONFIG_URL_API'] + '/api/getBlogType').then((res) => {
                    console.log('-----', res.data);
                    this.typeList = res.data['list'];
                });
            },
            jumpWithParams(path, value) {
                this.$router.push({
                    path: path,
                    query: {
                        id: value
                    }
                });
            },
            goWritePage() {
                this.$router.push('writeArticle');
            },
            getRandomImg() {
                var min = Math.ceil(1);
                var max = Math.floor(this.imgLists.length);
                var randomNumber = Math.floor(Math.random() * (max - min)) + min;
                console.log(randomNumber);
                return this.imgLists[randomNumber];
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/base.css';
</style>
