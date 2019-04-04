<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 10px 0;
        cursor: pointer;
    }

    .container {
        padding-bottom: 20px;
        min-height: calc(100vh - 20px);
        overflow: hidden;
        .content-box {
            display: flex;
            overflow: hidden;
            margin: 30px;
            .left-box {
                background: #fff;
                .list-box {
                    width: 140px;
                    li {
                        line-height: 45px;
                        text-align: center;
                        font-size: 14px;
                        color: #707070;
                        &.active {
                            color: #fff;
                            background: #cf2730;
                        }
                    }
                }
            }
            .right-box {
                background: #fff;
                margin: 0 0 0 30px;
                width: calc(100% - 170px);
                position: relative;
                .list-box {
                    background: #fff;
                    list-style: none;
                    padding: 10px 20px;
                    li {
                        border-bottom: 1px solid #f4f4f4;
                    }
                    h2 {
                        font-size: 18px;
                        margin: 5px 0;
                        display: inline-block;
                        &:hover {
                            color: #cf2730;
                        }
                    }
                    p {
                        color: #8a8a8a;
                        margin: 5px 0;
                        font-size: 14px;
                        line-height: 24px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .no-content {
                    text-align: center;
                    color: #656565;
                    position: absolute;
                    left: 50%;
                    top: 45%;
                    transform: translate(-50%, -50%);
                    p {
                        margin: 0;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="container">
        <my-header canWrite="true"></my-header>
        <div class="content-box">
            <div class="left-box">
                <ul class="list-box">
                    <li :class="item['type_id'] == typeId ? 'active': ''" v-for="item in typeList"
                        @click="selectType(item['type_id'])">{{item['type_name']}}
                    </li>
                </ul>
            </div>
            <div class="right-box">
                <ul class="list-box" v-if="articleList.length>0">
                    <li v-for="item in articleList" @click="jumpWithParams('/articleDetail', item['article_id'])">
                        <h2>{{item.title}}</h2>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
                <div class="no-content" v-if="articleList.length == 0" >
                    <svg viewBox="0 0 1706 1024" width="130px"
                         height="90px">
                        <path
                            d="M1450.666667 768h-42.666667v170.666667H1237.333333v-42.666667H1066.666667v-42.666667H597.333333v42.666667H426.666667v42.666667H256V768h170.666667v-42.666667h85.333333v-42.666666h42.666667v-85.333334h-42.666667v-85.333333h-85.333333v-42.666667h-42.666667V298.666667h42.666667v128h42.666666v42.666666h42.666667V298.666667h-85.333333v-42.666667h85.333333V128h42.666667V85.333333h42.666666v42.666667h128v42.666667h85.333334V128h42.666666v42.666667h85.333334V128h128V85.333333h42.666666v42.666667h42.666667v128h85.333333v42.666667h-85.333333v170.666666h42.666667v-42.666666h42.666666v-128h42.666667v170.666666h-42.666667v42.666667h-85.333333v85.333333h-42.666667v85.333334h42.666667v42.666666h85.333333v42.666667h170.666667v-42.666667h42.666667v42.666667zM1066.666667 213.333333h-128v42.666667h-42.666667v42.666667h-42.666667v42.666666h-42.666666v-42.666666h-42.666667v-42.666667h-42.666667v-42.666667h-128v42.666667h-42.666666v128h42.666666v42.666667h42.666667v42.666666h42.666667v42.666667h-42.666667v42.666667h-42.666667v85.333333h85.333334v42.666667h298.666666v-42.666667h85.333334v-85.333333h-42.666667v-42.666667h-42.666667v-42.666667h42.666667v-42.666666h42.666667v-42.666667h42.666666v-128h-42.666666v-42.666667zM1024 42.666667h42.666667v42.666666h-128v42.666667h-85.333334V85.333333h42.666667V42.666667h-42.666667v42.666666h-42.666666V42.666667h-42.666667v42.666666h42.666667v42.666667h-85.333334V85.333333h-128V42.666667h42.666667V0h384v42.666667zM682.666667 384h42.666666v42.666667h-42.666666v-42.666667z m256 0h42.666666v42.666667h-42.666666v-42.666667zM768 554.666667h128v42.666666h-128v-42.666666z m554.666667-42.666667h42.666666v42.666667h-42.666666v-42.666667z m42.666666 42.666667h42.666667v42.666666h-42.666667v-42.666666z m85.333334 0h42.666666v42.666666h-42.666666v-42.666666z m-42.666667 42.666666h42.666667v42.666667h-42.666667v-42.666667z m42.666667 85.333334h42.666666v42.666666h-42.666666v-42.666666z m42.666666-42.666667h42.666667v42.666667h-42.666667v-42.666667z m42.666667-42.666667h42.666667v42.666667h-42.666667v-42.666667z m-170.666667-128h42.666667v42.666667h-42.666667v-42.666667z m170.666667 0h42.666667v42.666667h-42.666667v-42.666667z m42.666667 42.666667h42.666666v85.333333h-42.666666v-85.333333z m-170.666667-85.333333h128v42.666666h-128v-42.666666zM0 853.333333h213.333333v42.666667H0v-42.666667z m1450.666667 0h256v42.666667h-256v-42.666667z m-867.555556 128h213.333333v42.666667H583.111111v-42.666667z m270.222222-42.666666h170.666667v42.666666H853.333333v-42.666666z"
                            fill="#656565"></path>
                    </svg>
                    <p>博主还没有写东西 ~</p>
                </div>
            </div>
        </div>
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
                typeId: '',
                articleList: [],
                typeList: []
            }
        },
        created() {
            this.typeId = this.$route.query['id'];
        },
        mounted() {
            this.getTypeList();
            this.getArticleList(this.typeId);
        },
        methods: {
            selectType(typeId) {
                this.typeId = typeId;
                this.getArticleList(typeId);
                this.jumpWithParams('/articleForTypeList', typeId);
            },
            getArticleList(typeId) {
                axios.get(HOST['CONFIG_URL_API'] + '/api/getArticleList', {
                    params: {
                        'typeId': typeId
                    }
                }).then((res) => {
                    console.log('-----', res.data);
                    this.articleList = res.data['data'];
                    console.log(this.articleList);
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
            getTypeList() {
                axios.get(HOST['CONFIG_URL_API'] + '/api/getBlogType').then((res) => {
                    console.log('-----', res.data);
                    this.typeList = res.data['list'];
                });
            }
        }
    }
</script>


