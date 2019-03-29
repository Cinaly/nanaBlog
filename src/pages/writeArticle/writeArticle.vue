<template>
    <div class="write-container">
        <div class="title-box">
            <span>标题: </span><input type="text" v-model="title">
        </div>
        <mavon-editor v-model="content" :toolbars="toolbars" @keydown=""/>
        <div class="footer-box">
            <label for="selectType">选择文章类型: </label>
            <select name="selectType" id="selectType" v-model="blogType">
                <option :value="item['type_id']" v-for="item in typeList">{{item['type_name']}}</option>
            </select>
            <button class="btn-submit" @click="submitArticle()">提交</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'writeArticle',
        data() {
            return {
                title: '',
                content: '',
                blogType: '',
                typeList: [],
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
        },
        mounted() {
            this.getTypeList();
        },
        methods: {
            submitArticle() {
                if (this.title && this.content && this.blogType) {
                    var params = new URLSearchParams();
                    params.append('title', this.title);
                    params.append('content', this.content);
                    params.append('type_id', this.blogType);
                    axios.post('http://172.31.11.221:3333/api/writeArticle', params).then((res) => {
                        console.log('-----', res.data);
                        alert(res.data['message']);
                        this.content = '';
                        this.title = '';
                        this.blogType = '';
                    });
                } else {
                    console.log(this.title, this.content, this.blogType);
                    alert('文章信息未完成');
                }
            },
            getTypeList() {
                axios.get('http://172.31.11.221:3333/api/getBlogType').then((res) => {
                    console.log('-----', res.data);
                    this.typeList = res.data['list']
                });
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
