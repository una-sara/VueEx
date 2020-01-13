<template>
    <div>
        <h1>登录页面</h1>
        <!-- 用户名的输入框 -->
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
        <!-- 密码的输入框 -->
        <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
        <!-- 登录按钮 单击事件 -->
        <mt-button size="large" @click="login">登 录</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            uname:"tom",//用户名
            upwd:123 //密码
        }
    },
    methods: {
        login(){
            // 1.获取用户名和密码
            var u = this.uname;
            var p = this.upwd;
            // console.log(u+p);
            // 2.格式：创建正则表达式 3-12位数 字母数字
            var reg = /^[a-z0-9]{3,12}$/i;
            // 3.判断用户名 用户名提示 toast
            if(!reg.test(u)){
                this.$toast("用户名格式不正确");
                return;
            }
            // 4.判断密码 密码提示
            if(!reg.test(p)){
                this.$toast("密码格式不正确");
                return;
            }
            // 5.发送请求 axios
            var url="login";
            var obj={uname:u,upwd:p};
            this.axios.get(url,{params:obj}).then(res=>{
                // 6.响应数据(接收后台返回来的数据)
                // console.log(res.data)
                var code=res.data.code;              
                if(code==-1){
                    // 7.失败 提示
                    this.$messagebox("消息","用户名或密码有误！")
                }else{
                    // 8.成功 跳转
                    this.$router.push("/product")                    
                }
                
            })
            
        }
    },
}
</script>