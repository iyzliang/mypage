<template>
    <el-row id="login">
        <el-col class="loginImg">
            <img src="../../../static/img/dui.svg" alt="对号">
        </el-col>
        <el-col class="loginInput" :sm="24" :lg="{span:12, offset:6}">
            <div class="username">
                <i class="iconfont icon-yonghu"></i>
                <input type="text" placeholder="Username">
            </div>
            <div class="password">
                <i class="iconfont icon-mima"></i>
                <input type="text" placeholder="password">
            </div>
        </el-col>
        <el-col class="loginBtn" :sm="24" :lg="{span:6, offset:9}">
            <div class="button" @click="login">Sign in</div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "login",
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        login: function() {
            var _this = this;
            $('.button').html("<i class='el-icon-loading'></i>").animate({
                width: "40px"
            }, 500, function() {
                $('.button').html("").css("position", "absolute").animate({
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "1000px",
                    height: "1000px",
                    borderRadius: "50%"
                }, 100, function() {
                    _this.$router.push({ path: "/home" })
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#login {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: url(http://oxnqkx7p0.bkt.clouddn.com/alan-labisch-326579.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
    .loginImg {
        // width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        >img {
            // logo动画
            transform-origin: top center;
            animation-name: swing;
            animation-duration: 5s;
            animation-fill-mode: both;
            animation-iteration-count: infinite;
            width: 200px;
            height: 200px;
        }
        @keyframes swing {
            20% {
                transform: rotate3d(0, 0, 1, 15deg)
            }
            40% {
                transform: rotate3d(0, 0, 1, -10deg)
            }
            60% {
                transform: rotate3d(0, 0, 1, 5deg)
            }
            80% {
                transform: rotate3d(0, 0, 1, -5deg)
            }
            100% {
                transform: rotate3d(0, 0, 1, 0deg)
            }
        }
    }
    .loginInput {
        padding: 0 30px;
        .username,
        .password {
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #eee;
             ::-moz-placeholder {
                color: #fff;
            }
             ::-webkit-input-placeholder {
                color: #fff;
            }
             :-ms-input-placeholder {
                color: #fff;
            }
            i {
                height: 30px;
                line-height: 30px;
                display: inline-block;
                font-size: 20px;
                color: #fff;
            }
            input {
                font-family: 'Helvetica-Neue-db0856beb1a9d0';
                height: 30px;
                font-size: 14px;
                margin-left: 20px;
                border-width: 0px;
                background: rgba(0, 0, 0, 0);
                color: #fff;
            }
        }
    }
    .loginBtn {
        margin-top: 20px;
        padding: 0 30px;
        display: flex;
        justify-content: center;
        .button {
            font-family: 'Helvetica-Neue-db0856beb1a9d0';
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            width: 100%;
            height: 40px;
            background: #ff3366;
            color: #fff;
            border-radius: 20px;
            &:hover {
                opacity: 0.75;
            }
        }
    }
}
</style>
