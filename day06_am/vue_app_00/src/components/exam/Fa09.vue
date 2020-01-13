<template>
    <div>
        <h1>Fa09父组件</h1>
        <sub09 msg="父传子的数据abc" :add="add" :myimg="require('../../assets/01.png')"></sub09>
    </div>
</template>

<script>
// 1.引入子组件
import Sub09 from "./Sub09.vue"
export default {
    // 2.注册
    components:{
        "sub09":Sub09
    },
    methods: {
        add(){
            console.log("添加内容")
        }
    },

}
</script>
