<template>
    <div id="home">
        <homeMenu></homeMenu>
        <homeMain></homeMain>
    </div>
</template>

<script>
import homeMenu from "./homeMenu.vue"
import homeMain from "./homeMain.vue"
export default {
    name: 'home',
    components: {
        homeMenu,
        homeMain
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>