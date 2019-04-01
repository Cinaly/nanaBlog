<template>
    <div>
        <!--top begin-->
        <header id="header">
            <div class="navbox">
                <h2 id="mnavh"><span class="navicon"></span></h2>
                <div class="logo">
                    <a href="javascript:;" @click="goPage('index')">李思娜的个人博客</a>
                    <a href="javascript:;" class="btn-gowrite" @click="goPage('writeArticle')">写博客</a>
                </div>
            </div>
        </header>
        <div class="write-container">
            <div class="title-box">
                <span>{{articleDetail.title}} </span>
            </div>
            <mavon-editor
                class="md"
                :value="articleDetail.content"
                :subfield="prop.subfield"
                :defaultOpen="prop.defaultOpen"
                :toolbarsFlag="prop.toolbarsFlag"
                :editable="prop.editable"
                :scrollStyle="prop.scrollStyle"
            ></mavon-editor>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {urlParamsToJson} from '@/utils/urlParamsToJson.util';

    export default {
        name: 'writeArticle',
        data() {
            return {
                articleDetail: '',
                articleId: ''
            }
        },
        created() {
            this.articleId = this.$route.query['articleId'];
        },
        mounted() {
            this.getArticleDetail();
        },
        computed: {
            prop () {
                let data = {
                    subfield: false,// 单双栏模式
                    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                    editable: false,
                    toolbarsFlag: false,
                    scrollStyle: true
                }
                return data
            }
        },
        methods: {
            getArticleDetail() {
                var articleId = this.articleId;
                axios.get('http://172.31.11.221:3333/api/getArticleDetail', {params:{
                        'articleId': articleId
                }}).then((res) => {
                    this.articleDetail = res.data['articleDetail'][0];
                    console.log('-----', this.articleDetail);
                }).catch((err)=>{
                    console.log(err);
                });
            },
            goPage(whichPage){
                this.$router.push(whichPage);
            }
        }
    }
</script>
<style scoped>
    @import '../../assets/base.css';
</style>

<style lang="scss" scoped>
    html, body, #app {
        height: 100%;
    }
    .btn-gowrite {
        float: right;
    }
</style>
<style lang="scss" scoped>
    @import "./articleDetail";
</style>
