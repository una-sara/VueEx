<template>
    <div>
        <message v-for="(item,index) of rows.data" :key="index"
        :imgurl="require('../../../assets/a_7.png')"
        :title="item.title" :subtitle="item.subtitle" :sendtime="item.time"
         class="itemstyle"></message>
    </div>
</template>

<script>
import Message from "./Message.vue" //1.引进子组件
import json from "../json/messagelist.json" //引入数据
export default {
    data(){
        return{
            rows:json
        }
    },
    components:{ //2.注册
        "message":Message
    }
}
</script>
<style scoped>
.itemstyle{padding: 5px; border-bottom:1px solid #ccc;}
</style>
