<template>
    <div>
        <h1>Exam03</h1>
        <!-- 用户名  密码   年龄 -->
        <mt-field label="用户名" placehodler="请输入用户名" v-model="uname" type="text" :attr="{maxlength:15}"></mt-field>
        <mt-field label="密码" placehodler="请输入密码" v-model="upwd" type="password" ></mt-field>
        <mt-field label="年龄" placehodler="请输入年龄" v-model="age" type="number" ></mt-field>
        <mt-button @click="reg" size="large">注册</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {uname:"",upwd:"",age:""}
    },
    methods: {
        reg(){

        }
    },
}
</script>

<style>

</style>

