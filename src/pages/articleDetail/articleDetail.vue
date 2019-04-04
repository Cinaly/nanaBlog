<template>
    <div class="articlewrite-container">
        <my-header canWrite="true"></my-header>
        <div class="write-container">
            <div class="title-box">
                <span>{{articleDetail.title}} </span>
                <div>
                    <a class="delete-btn" href="javascript:;" @click="dialogVisible = true">删除</a>
                    <a class="edit-btn" href="javascript:;" @click="jumpWithParams('/writeArticle', articleId)">编辑</a>
                </div>
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
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>确定删除此博文？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteArticle()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios';
    import myHeader from '@/component/header/my_header';

    export default {
        name: 'writeArticle',
        components: {
            myHeader
        },
        data() {
            return {
                articleDetail: '',
                articleId: '',
                dialogVisible: false
            }
        },
        created() {
            this.articleId = this.$route.query['id'];
        },
        mounted() {
            this.getArticleDetail();
        },
        computed: {
            prop() {
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
                axios.get('http://172.31.11.221:3333/api/getArticleDetail', {
                    params: {
                        'articleId': articleId
                    }
                }).then((res) => {
                    this.articleDetail = res.data['articleDetail'][0];
                    console.log('-----', this.articleDetail);
                }).catch((err) => {
                    console.log(err);
                });
            },
            deleteArticle() {
                this.dialogVisible = false;
                var articleId = this.articleId;
                axios.get('http://172.31.11.221:3333/api/deleteArticle', {
                    params: {
                        'articleId': articleId
                    }
                }).then((res) => {
                    alert(res.data['message']);
                    if (res.data['err_code'] == 0) {
                        this.goPage('index');
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },
            goPage(whichPage) {
                this.$router.push(whichPage);
            },
            jumpWithParams(path, value) {
                this.$router.push({
                    path: path,
                    query: {
                        id: value
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./articleDetail";
</style>
