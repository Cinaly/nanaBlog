<template>
    <div class="articlewrite-container">
        <my-header canWrite="true"></my-header>
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
    import myHeader from '@/component/header/my_header';

    export default {
        name: 'writeArticle',
        components:{
            myHeader
        },
        data() {
            return {
                articleDetail: '',
                articleId: ''
            }
        },
        created() {
            this.articleId = this.$route.query['id'];
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

<style lang="scss" scoped>
    @import "./articleDetail";
</style>
