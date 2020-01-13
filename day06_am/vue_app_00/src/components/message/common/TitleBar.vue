<template>
    <div class="page-head">
        <!-- 左侧文字 -->
        <span>{{leftTitle}}</span> 
        <!-- 右侧图标 -->
        <div class="right-head">
            <div class="searchdiv" @click="search"><img :src="rightImg01" width="25"></div>
            <div class="adddiv" @click="add"><img :src="rightImg02" alt="" width="25"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        leftTitle:"", //左侧文字
        rightImg01:"",//搜索图标
        rightImg02:"",//加号图标
        search:"",//搜索方法
        add:"" //添加方法
    }
}
</script>

<style scoped>
/* 最外层父元素 */
.page-head{
    z-index: 999;
    display: flex;
    position: fixed;
    width:100%;
    background: #333;
    color:#fff;
    font-size:18px;
    height:48px;
    padding: 0px 7px;
    justify-content: space-between; /* 两端对齐 */
    align-items: center; /*垂直居中*/
}
/* 右侧图标盒子 */
.right-head{display: flex;}
/* 图标 */
.searchdiv,.adddiv{
    display: flex;
    align-items: center;
    height:48px;
    margin-right:25px;
}
</style>

