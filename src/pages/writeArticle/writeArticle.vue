<template>
    <div class="write-container">
        <label for="">标题: </label><input type="text" v-model="title">
        <mavon-editor v-model="content" :toolbars="toolbars" @keydown=""/>
        <button @click="submitArticle()">提交</button>
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

        },
        methods: {
            submitArticle() {
                var params = new URLSearchParams();
                params.append('title', this.title);
                params.append('content', this.content);
                axios.post('http://172.31.11.221:3333/api/writeArticle', params).then((res)=>{
                    console.log('-----', res.data);
                });
            }
        }
    }
</script>

<style scoped>

</style>
