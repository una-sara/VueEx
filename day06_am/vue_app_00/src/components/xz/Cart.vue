<template>
    <div class="cart">
        <!-- 1.顶部复选框，全选 -->
        <div class="selectAll">全选<input type="checkbox"></div>
        <!-- 2.商品信息 -->
        <div class="cart-item" v-for="(item,index) of list" :key="index">
            <div class="leftText">
                <input type="checkbox">
                <div class="lname">{{item.lname}}</div>
                <div class="price">{{item.price}}</div>
            </div>
            <mt-button @click="deleteItem" :data-id="item.id">删除</mt-button>
        </div>
        <!-- 3.购物车中商品数量，删除选中商品，清空购物车 -->
        <div>
            <div class="countC">购物车中商品数量<span>0</span></div>
            <mt-button size="large">删除选中商品</mt-button>
            <mt-button size="large">清空购物车</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{ list:[] }
    },
    // 当前组件创建成功加载购物车数据列表
    created(){
        this.loadMore()
    },
    methods:{
        deleteItem(e){
            //单击删除按钮删除一个指定的商品
            // 1.为按钮绑定删除单击事件
            // 2.显示确认框  确定
            this.$messagebox.confirm("是否确认删除该商品？").then(res=>{
                // 3.将当前商品的id传给后台
                var id=e.target.dataset.id;
                // 4.发送axios删除请求
                var url="delItem";
                var obj={id:id};
                this.axios.get(url,{params:obj}).then(res=>{
                    if(res.data.code==1){
                        this.$toast("删除成功！")
                        this.loadMore(); //删除成功重新加载页面
                    }else{
                        this.$toast("删除失败！")
                    }
                })
                // 5.删除成功，提示成功
            }).catch(err=>{})
        },
        loadMore(){ //获取购物车数据列表
            // 1.url
            var url="carts";
            // 2.发送axios请求
            this.axios.get(url).then(res=>{
                // 3.返回数据
                if(res.data.code==-1){
                    // 4.如果返回-1，请先登录
                    this.$messagebox("消息","请登录").then(res=>{
                        this.$router.push("/Login");
                    })
                }else{
                    // console.log(res.data)
                    this.list=res.data.data;
                }   
            })   
        }
    }
}
</script>

<style scoped>
.selectAll{padding:10px;}
.cart-item{display: flex; justify-content: space-between;/*两端对齐 */
align-items:center;/*垂直居中 */ margin-top:10px; padding:0px 10px;
border-bottom:1px solid #ccc;}
.leftText{display: flex; align-items:center;/*垂直居中 */}
.lname,.price{margin-left:15px;}
.countC{margin-left:10px; margin-bottom:10px;}
.countC span{color:red; font-weight: bold; }
</style>
