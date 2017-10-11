<template>
    <div id="login">
        <div class="loginImg">
            <img src="../../../static/img/dui.svg" alt="对号">
        </div>
        <div class="loginInput">
            <div class="username">
                <i class="iconfont icon-yonghu"></i>
                <input type="text" placeholder="Username">
            </div>
            <div class="password">
                <i class="iconfont icon-mima"></i>
                <input type="text" placeholder="password">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#login{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: url(http://oxnqkx7p0.bkt.clouddn.com/alan-labisch-326579.jpg);
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-size: cover;
    background-position:50% 50%;
    .loginImg{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        >img{
            width: 200px;
            height: 200px;
        }
    }
    .loginInput{
        padding: 0 30px;
        .username,.password{
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #eee;
            ::-moz-placeholder { color: #fff; }
            ::-webkit-input-placeholder { color:#fff; }
            :-ms-input-placeholder { color:#fff; }
            i{
                height: 30px;
                line-height: 30px;
                display: inline-block;
                font-size: 20px;
                color: #fff;
            }
            input{
                font-family:'Helvetica-Neue-db0856beb1a9d0';
                height: 30px;
                font-size: 14px;
                margin-left: 20px;
                border-width: 0px;
                background: rgba(0,0,0,0);
                color: #fff;
            }
        }
    }
}
</style>
