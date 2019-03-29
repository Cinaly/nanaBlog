<template>
    <div>
        <!--top begin-->
        <header id="header">
            <div class="navbox">
                <h2 id="mnavh"><span class="navicon"></span></h2>
                <div class="logo"><a href="http://www.yangqq.com">李思娜的个人博客</a></div>
            </div>
        </header>
        <!--top end-->
        <article>
            <!--lbox begin-->
            <div class="lbox">
                <div class="zhuanti whitebg" v-for="(itemList,key) in allData" v-if="itemList.length>0">
                    <h2 class="htitle"><span class="hnav"><a href="/" target="_blank">更多</a></span>{{itemList[0]['series_name']}}</h2>
                    <ul>
                        <li v-for="item in itemList"><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/1.jpg"></a></i>
                            <b>{{item.title}}</b><span>{{item.content}}</span><a
                                href="" target="_blank" class="readmore">文章阅读</a></li>
                        <!--<li><i class="ztpic"><a href="/" target="_blank"><img src="../../assets/images/2.jpg"></a></i>
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
                                href="" target="_blank" class="readmore">文章阅读</a></li>-->
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

    export default {
        name: 'main',
        data() {
            return {
                allData: [],
                typeList: []
            }
        },
        created() {
            this.getArticleList();
            this.getTypeList();
        },
        mounted() {
        },
        methods:{
            getArticleList() {
                axios.get('http://172.31.11.221:3333/api/getArticleList').then((res) => {
                    console.log('-----', res.data);
                    this.allData = res.data['data'];
                    console.log(this.allData);
                });
            },
            getTypeList() {
                axios.get('http://172.31.11.221:3333/api/getBlogType').then((res) => {
                    console.log('-----', res.data);
                    this.typeList = res.data['list'];
                });
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/base.css';
</style>
<style lang="scss" scoped>

</style>
