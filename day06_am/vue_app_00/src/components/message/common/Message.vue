<template>
    <div class="rootstyle">
        <!-- 左侧图和字 -->
        <div class="imglable">
            <img :src="imgurl" alt="" class="imgstyle">
            <div class="titleT">
                <span class="titlelable">{{title}}</span>
                <span class="subtitle">{{subtitle}}</span>
            </div>
        </div>
        <!-- 右侧时间 -->
        <span class="sendtime">{{sendtime}}</span>
    </div>
</template>
<script>
export default {
    // (1)创建4个变量来接收数据 （图片，主标题，副标题，时间）
    props:{
        imgurl:"",//图片
        title:"",//主标题
        subtitle:"",//副标题
        sendtime:"" //时间
    }
    // (2)MessageList父级将数据传过来

}
</script>

<style scoped>
/* 最外层设置弹性布局 */
.rootstyle{display:flex; justify-content: space-between; align-content: center}
.imgstyle{width:50px; height: 50px;} 
/* 设置图和字的盒子弹性布局 */
.imglable{display: flex; }
/*主副标题样式*/
.titleT{display: flex; flex-direction: column; /*按列方式排列 */ margin-left:10px}
.titlelable{font-size: 16px;}
.subtitle{font-size: 14px; color:gray}
/* 右侧时间  */
.sendtime{color: gray; font-size: 14px;}
</style>
