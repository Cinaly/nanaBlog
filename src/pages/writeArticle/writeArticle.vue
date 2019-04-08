<template>
    <div>
        <my-header></my-header>
        <div class="write-container">
            <div class="title-box">
                <el-input
                    placeholder="请输入标题"
                    v-model="title"
                    clearable>
                </el-input>
            </div>
            <mavon-editor v-model="content" :toolbars="toolbars" @keydown=""/>
            <div class="footer-box">
                <div class="div1" v-if="typeList.length > 0">
                    <el-select v-model="blogType" placeholder="选择文章类型">
                        <el-option
                            v-for="item in typeList"
                            :key="item['type_id']"
                            :label="item['type_name']"
                            :value="item['type_id']">
                        </el-option>
                    </el-select>

                </div>
                <div class="div2" v-if="seriesList.length > 0">
                    <el-select v-model="blogSeries" placeholder="选择大类">
                        <el-option
                            v-for="item in seriesList"
                            :key="item['series_id']"
                            :label="item['series_name']"
                            :value="item['series_id']">
                        </el-option>
                    </el-select>

                </div>
                <el-button class="btn-submit" @click="submitArticle()">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import myHeader from '@/component/header/my_header';
    import {HOST} from '@/host/index';

    export default {
        name: 'writeArticle',
        components: {
            myHeader
        },
        data() {
            return {
                title: '',
                content: '',
                blogType: '',
                blogSeries: '',
                articleId: '',
                typeList: [],
                seriesList: [],
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    mark: true, // 标记
                    // superscript: true, // 上角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    help: true, // 帮助
                    code: true, // code
                    subfield: true, // 是否需要分栏
                    // fullscreen: true, // 全屏编辑
                    // readmodel: true, // 沉浸式阅读
                    /* 1.3.5 */
                    undo: true, // 上一步
                    trash: true, // 清空
                    // save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    // navigation: true, // 导航目录,
                }
            }
        },
        created() {
            this.articleId = this.$route.query['id'];
        },
        mounted() {
            if (this.articleId) {
                this.getArticleDetail(this.articleId);
            }
            this.getTypeList();
            this.getSeriesList();
        },
        methods: {
            getArticleDetail(articleId) {
                axios.get(HOST['CONFIG_URL_API'] + '/api/getArticleDetail', {
                    params: {
                        'articleId': articleId
                    }
                }).then((res) => {
                    var articleDetail = res.data['articleDetail'][0];
                    this.title = articleDetail['title'];
                    this.content = articleDetail['content'];
                    this.blogSeries = articleDetail['series_id'];
                    this.blogType = articleDetail['type_id'];
                    console.log('-----', this.articleDetail);
                }).catch((err) => {
                    console.log(err);
                });
            },
            submitArticle() {
                if (!this.title) {
                    alert('请填写文章标题');
                    return false
                }
                if (!this.content) {
                    alert('请填写文章内容');
                    return false
                }
                if (!this.blogType) {
                    alert('请选择文章类型');
                    return false
                }
                if (!this.blogSeries) {
                    alert('请选择文章大类');
                    return false
                }

                var params = new URLSearchParams();
                var urlStr = HOST['CONFIG_URL_API'] + '/api/writeArticle';
                if (this.articleId) {
                    urlStr = HOST['CONFIG_URL_API'] + '/api/updateArticle';
                    params.append('article_id', this.articleId);
                }

                params.append('title', this.title);
                params.append('content', this.content);
                params.append('type_id', this.blogType);
                params.append('series_id', this.blogSeries);
                axios.post(urlStr, params).then((res) => {
                    console.log('-----', res.data);
                    alert(res.data['message']);
                    if (res.data['err_code'] == 0) {
                        this.goPage('index');
                    }
                });

            },
            getTypeList() {
                axios.get(HOST['CONFIG_URL_API'] + '/api/getBlogType').then((res) => {
                    console.log('-----', res.data);
                    this.typeList = res.data['list'];
                });
            },
            getSeriesList() {
                axios.get(HOST['CONFIG_URL_API'] + '/api/getBlogSeries').then((res) => {
                    console.log('-----', res.data);
                    this.seriesList = res.data['list'];
                });
            },
            goPage(whichPage) {
                this.$router.push(whichPage);
            }
        }
    }
</script>

<style lang="scss" scoped>
    html, body, #app {
        height: 100%;
    }
</style>

<style lang="scss" scoped>
    @import "./writeArticle";
</style>


