<template>
    <div id="homeMain">
        <div class="main">
            <div class="card">
                <img src="">
                <h4>Nature</h4>
                <p></p>
                <a href="#">Learn more</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeMain',
    data() {
        return {
            mainData: [
                {
                    img: "https://source.unsplash.com/category/nature/330x200",
                    name: "青岛游",
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.",
                    linkTo: ""
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#homeMain{
    // background: rgba(0,0,0,0.2);
    .main{
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        .card{
            height: 430px;
            width: 330px;
            border-radius: 8px;
            box-shadow: 0 2px 2px rgba(0,0,0,0.2);
            background: #fff;
            overflow: hidden;
            text-align: center;
            img{
                width: 330px;
                height: 200px;
            }
            h4{
                margin: 30px 0;
                font-weight: 600;
            }
            p{
                margin: 30px 0;
                padding: 0 1em;
                font-size: 16px;
                font-weight: 300;
            }
            a{
                font-weight: 500;
                text-decoration: none;
                color: #3498db;
            }
        }
    }
}
</style>