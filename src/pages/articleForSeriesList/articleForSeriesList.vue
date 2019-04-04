<style lang="scss" scoped>
    .container {
        padding-bottom: 20px;
        min-height: calc(100vh - 20px);
        .list-box {
            background: #fff;
            list-style: none;
            padding: 40px;
            margin: 20px;
            li {
                border-bottom: 1px solid #f4f4f4;
                cursor: pointer;
                &:first-child {
                    font-size: 30px;
                    font-weight: bold;
                    color: #ffa200;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #d5d5d5;
                }
            }
            h2 {
                font-size: 18px;
            }
            p {
                color: #8a8a8a;
                font-size: 14px;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>

<template>
    <div class="container">
        <my-header canWrite="true"></my-header>
        <div class="title-box">
            <h3></h3>
        </div>
        <ul class="list-box" v-if="list.length>0">
            <li>
                {{list[0]['series_name']}}
            </li>
            <li v-for="item in list" @click="jumpWithParams('/articleDetail', item['article_id'])">
                <h2>{{item.title}}</h2>
                <p>{{item.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import myHeader from '@/component/header/my_header';
    import axios from 'axios';
    import {HOST} from '@/host/index';

    export default {
        name: 'article-for-series-list',
        components: {
            myHeader
        },
        data() {
            return {
                seriesId: '',
                list: []
            }
        },
        created() {
            this.seriesId = this.$route.query['id'];
        },
        mounted() {
            this.getArticleList();
            this.mod('3214282912345698765432161182', 97, 9);
        },
        methods: {
            getArticleList() {
                var seriesId = this.seriesId;
                axios.get(HOST['CONFIG_URL_API'] + '/api/getArticleList', {
                    params: {
                        'seriesId': seriesId
                    }
                }).then((res) => {
                    console.log('-----', res.data);
                    this.list = res.data['data'];
                    console.log(this.list);
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
            /*
            * number1 需要计算的数字
            * number2 对该数字取模
            * number3 分布计算时截几位
            * */
            mod(number1, number2, number3) {
                console.log(number1, number2, number3);
                var mod1 = number1 % number2;
                var mod2;
                var len = number1.length;
                var tt = Math.ceil(len / number3);
                var N = parseInt(number1.substring(0, number3)) % number2;
                if (tt >= 2) {
                    for (var i = 1; i < tt; i++) {
                        console.log(N, number1.substring(i * number3, i * number3 + number3),
                            N + number1.substring(i * number3, i * number3 + number3));
                        N = parseInt(N + number1.substring(i * number3, i * number3 + number3)) % number2;
                        console.log(N);
                    }
                }
                mod2 = N;
                console.log(mod1, mod2, Math.pow(2, 53));
            }
        }
    }
</script>


