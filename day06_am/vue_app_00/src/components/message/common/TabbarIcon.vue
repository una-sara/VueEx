<template>
    <div>
      <img :src="focused? selectedImage: normalImage" class="imgstyle">
    </div>
</template>

<script>
export default {
    props:{
        focused:"", //选中状态
        selectedImage:"", //选中图标
        normalImage:"" //未选图标
    }
}
</script>

<style scoped>
.imgstyle{width:30px; height: 30px;}
</style>
