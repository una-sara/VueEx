<template>
    <div>
        <h1>我是Sub09子组件</h1>
        <h3 @click="add">{{msg}}</h3>
        <img :src="myimg">
    </div>
</template>

<script>
export default {
    // 自己的
    data() {
        return {
        
        }
    },
    //父级给的
    props:{msg:"",add:"",myimg:""}
    // props:{
    //     msg:{default:""}
    // }
}
</script>
