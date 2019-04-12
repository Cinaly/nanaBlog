<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: #333;
    }

    a:hover {
        color: #000;
        text-decoration: none;
    }

    /*header*/
    #header {
        width: 100%;
        margin: auto;
        position: relative;
        box-sizing: border-box;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
        height: 60px;
        .navbox {
            width: 100%;
            margin: auto;
            .logo {
                padding: 0 20px;
                line-height: 60px;
                color: #333;
                font-size: 22px;
                position: relative;
                a {
                    color: #333
                }
                .el-input{
                    width: 160px;
                    position: absolute;
                    right: 120px;
                }
                .write-box {
                    float: right;
                    height: 60px;
                    &:hover {
                        cursor: pointer;
                    }
                    .btn-gowrite {
                        float: right;
                        margin-left: 5px;
                        font-size: 16px;
                    }
                }
            }
            .search-result {
                width: 285px;
                position: absolute;
                top: 60px;
                right: 76px;
                background: #fff;
                border-radius: 3px;
                z-index: 100;
                -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
                box-shadow: 0px 1px 9px -1px rgba(0, 0, 0, 1);
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 10px 0;
                    max-height: 200px;
                    li {
                        font-size: 12px;
                        line-height: 25px;
                        padding: 0 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #666;
                        &:hover{
                            cursor: pointer;
                            color: #000;
                        }
                    }
                }
            }
        }
    }
</style>


<template>
    <!--top begin-->
    <header id="header">
        <div class="navbox">
            <div class="logo">
                <a href="javascript:;" @click="goPage('index')">nana博客</a>
                <el-input
                    v-if="canWrite"
                    placeholder="搜一搜"
                    prefix-icon="el-icon-search"
                    v-model="searchkey">
                </el-input>

                <div class="write-box" v-if="canWrite" @click="goPage('writeArticle')">
                    <svg id="xieboke1" style="position: relative;top:3px;" viewBox="0 0 1024 1024" width="20px"
                         height="20px">
                        <path
                            d="M204.70021457 751.89799169h657.99199211a33.6932867 33.6932867 0 0 1 0 67.33536736H163.68452703a33.53966977 33.53966977 0 0 1-18.74125054-5.68382181c-18.63883902-9.4218307-18.17798882-29.44322156-15.20806401-39.17228615C199.0675982 570.27171976 309.41567149 409.58853908 435.38145354 290.12586836A243.22661203 243.22661203 0 0 1 536.97336934 234.20935065c138.10150976-33.79569759 228.3257813-29.95527721 318.60125827-28.52152054-17.15387692 20.48224105-36.20236071 41.6301547-57.29906892 62.93168529-3.1747472 3.22595323-164.67721739 19.91897936-187.97576692 47.05794871-23.29854894 27.13896932 129.60138005 7.37360691 125.19769798 11.11161576-21.6599699 18.33160576-44.90731339 36.4071831-69.94685287 53.8682939-4.50609297 3.1747472-149.52035944-0.35843931-174.61110436 27.85584737-25.19315641 28.16308124 101.89914903 18.12678338 96.0617103 21.40394206-67.43777825 37.63611797-125.96578207 64.62147036-212.70807253 93.8086635-57.65750823 19.4069231-121.8181284 133.13456658-146.5504346 179.06599187a435.75967738 435.75967738 0 0 0-23.04252112 49.10617311z"
                            fill="#CA0C16"></path>
                    </svg>
                    <a href="javascript:;" class="btn-gowrite">写博客</a>
                </div>
            </div>
            <div class="search-result" v-if="list.length > 0 && searchkey">
                <ul>
                    <li @click="jumpWithParams('/articleDetail', item['article_id'], fromWhich)" v-for="item in list">{{item.title}}</li>
                </ul>
            </div>
        </div>
    </header>
    <!--top end-->
</template>

<script>
    import axios from 'axios';
    import {HOST} from '@/host/index';

    export default {
        name: 'my-header',
        props: ['canWrite', 'fromWhich'],
        inject: ['reload'],
        data() {
            return {
                list: [],
                searchkey: ''
            }
        },
        mounted(){
            console.log(this.fromWhich);
        },
        methods: {
            jumpWithParams(path, value, fromWhich) {
                if(fromWhich == 'articleDetail') {
                    console.log(111, fromWhich);
                    this.reload();
                }
                this.$router.push({
                    path: path,
                    query: {
                        id: value
                    }
                });

            },
            goPage(whichPage) {
                this.$router.push(whichPage);
            },
            searchArticle(key) {
                axios.get(HOST['CONFIG_URL_API'] + '/api/searchArticle', {
                    params: {
                        'key': key
                    }
                }).then((res) => {
                    console.log('-----', res.data);
                    this.list = res.data['list'];
                    console.log(this.list);
                });
            }
        },
        watch: {
            searchkey(oldVal, newVal) {
                this.searchArticle(this.searchkey);
            }
        },
    }
</script>
