<template>
    <div>
        <h1>第1个vue组件</h1>
        <h2>welcome</h2>
    </div>
</template>

<script>
export default {
    created() {
        this.$toast({message:"提交成功",position:"bottom"})   
    }
}
</script>

<style>

</style>

