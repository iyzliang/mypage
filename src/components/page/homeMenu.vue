<template>
    <div id="homeMenu">
        <div class="cover">
            <el-row class="menu">
                <el-col :span="3">
                    <i class="iconfont icon-caidan" @click="menuShow"></i>
                </el-col>
                <el-col :span="18" class="search">
                    <input type="text" class="searchInput" placeholder="搜点啥" v-show="searchFlag">
                    <i class="iconfont icon-soushuo" v-show="searchFlag"></i>
                </el-col>
                <el-col :span="3">
                    <i class="iconfont icon-soushuo" @click="searchShow"></i>
                </el-col>
            </el-row>
            <el-row class="userInfo">
                <el-col class="greet" :span="24">
                    <p>{{ greetText }}</p>
                </el-col>
                <el-col :span="24" class="userImg">
                    <img src="../../../static/img/logo.png" alt="头像">
                </el-col>
                <el-col :span="24" class="userName">
                    {{ userName }}
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeMenu',
    data() {
        return {
            searchFlag: false,
            greetText: "",
            userName: "Yzliang"
        }
    },
    created (){
        // 时间匹配欢迎语
        var curDate = new Date() + "";
        var curTime = curDate.split(" ")[4].split(":")[0];
        if(curTime >= 6 && curTime < 11){
            this.greetText = "Good morning!"
        }else if(curTime >= 11 && curTime < 14){
            this.greetText = "Good noon!"
        }else if(curTime >= 14 && curTime < 20){
            this.greetText = "Good afternoon!"
        }else{
            this.greetText = "Good evening!"
        }
    },
    mounted (){
        $("#homeMenu").height($(window).height() * 0.5);
    },
    methods: {
        // 点击搜索
        searchShow: function(){
            if(this.searchFlag){
                var _this = this;
                $(".searchInput").animate({
                    width: "30px"
                },500,function(){
                    _this.searchFlag = false;
                })
            }else{
                this.searchFlag = true;
                $(".searchInput").animate({
                    width: "70%"
                },500)
            }
        },
        // 点击菜单
        menuShow: function(){
            this.$message.warning("别瞎点哦！")
        }
    }
}
</script>

<style lang="scss" scoped>
#homeMenu{
    font-family: 'Helvetica-Neue-db0856beb1a9d0';
    background: url(https://source.unsplash.com/random/800x600) no-repeat;
    background-size: 100% 100%;
    position: relative;
    .cover{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.5);
        .menu{
            height: 50px;
            >div{
                height: 50px;
                line-height: 50px;
                text-align: center;
                .iconfont{
                    font-size: 20px;
                    color: #afadae;
                    &::hover{
                        color: #20a0ff;
                    }
                }
            }
            >.search{
                padding: 10px 0;
                position: relative;
                input{
                    font-family: "Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif;
                    float: right;
                    height: 30px;
                    width: 30px;
                    border-width: 0px;
                    background: transparent;
                    border: 2px solid #afadae;
                    padding: 0 8px;
                    border-radius: 15px;
                    color: #afadae;
                }
                >.iconfont{
                    height: 30px;
                    position: absolute;
                    right: 10px;
                    line-height: 30px;
                }
            }
        }
        .userInfo{
            .greet{
                text-align: center;
                color: #fff;
                font-size: 24px;
                height: 50px;
                line-height: 50px;
            }
            .userImg{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 150px;
                img{
                    width: 100px;
                    height: 100px;
                    transform-origin: top center;
                    animation-name: tobig;
                    animation-duration: 5s;
                    animation-timing-function: linear;
                    animation-fill-mode: both;
                    animation-iteration-count: infinite;
                }
                @keyframes tobig {
                    25% {
                        width: 125px;
                        height: 125px;
                    }
                    50% {
                        width: 150px;
                        height: 150px;
                    }
                    75% {
                        width: 125px;
                        height: 125px;
                    }
                    100% {
                        width: 100px;
                        height: 100px;
                    }
                    
                }
            }
            .userName{
                font-size: 18px;
                color: #fff;
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
        }
    }
}
</style>