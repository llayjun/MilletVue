<template>
    <div id="vue">Hello Vue.js {{message}}</div>
</template>

<script type="text/javascript">
export default {
    name: "ShowText",
    data() {
        return {
            message: "第一行vue代码"
        }
    }
}
</script>

<style type="text/css">
    #vue{
        color: rgb(140, 150, 140);
        font-size: 28px;
    }
</style>