<template>
    <div id="homeMenu">
        <div class="cover">
            <el-row class="menu">
                <el-col :span="3">
                    <i class="iconfont icon-caidan" @click="menuShow"></i>
                </el-col>
                <el-col :span="18" class="search">
                    <input type="text" class="searchInput" placeholder="搜点啥" v-show="searchFlag">
                    <i class="iconfont icon-sousuo1"></i>
                </el-col>
                <el-col :span="3">
                    <i class="iconfont icon-sousuo" @click="searchShow"></i>
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
            searchFlag: false
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
            }
        }
    }
}
</style>