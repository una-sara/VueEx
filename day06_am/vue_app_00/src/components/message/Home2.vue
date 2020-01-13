<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <!-- 第1部分：头部 -->
            <titlebar leftTitle="微信(2)"
            :rightImg01="require('../../assets/ic_search.png')"
            :rightImg02="require('../../assets/ic_add.png')"
            :add="add" :search="search"
            ></titlebar>
            <div style="height:48px;"></div><!--撑起微信头部高度-->
            <!-- 第2部分：面板 -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="message">
                    <messagelist></messagelist>
                </mt-tab-container-item>
                <mt-tab-container-item id="contact">通讯录页面</mt-tab-container-item>
                <mt-tab-container-item id="find">发现</mt-tab-container-item>
                <mt-tab-container-item id="me">我</mt-tab-container-item>
            </mt-tab-container>
            <!-- 第3部分：底部导航条 -->
            <mt-tabbar fixed v-model="active">
                <mt-tab-item id="message" @click.native="changeState(0)">
                    <tabbaricon
                    :focused="currentIndex[0].isSelect"
                    :selectedImage="require('../../assets/ic_weixin_selected.png')"
                    :normalImage="require('../../assets/ic_weixin_normal.png')"
                    ></tabbaricon>
                    微信
                </mt-tab-item>
                <mt-tab-item id="contact" @click.native="changeState(1)">
                    <tabbaricon
                    :focused="currentIndex[1].isSelect"
                    :selectedImage="require('../../assets/ic_contacts_selected.png')"
                    :normalImage="require('../../assets/ic_contacts_normal.png')"
                    ></tabbaricon>
                    通讯录
                </mt-tab-item>
                <mt-tab-item id="find" @click.native="changeState(2)">
                    <tabbaricon
                    :focused="currentIndex[2].isSelect"
                    :selectedImage="require('../../assets/ic_find_selected.png')"
                    :normalImage="require('../../assets/ic_find_normal.png')"
                    ></tabbaricon>
                    发现
                    </mt-tab-item>
                <mt-tab-item id="me" @click.native="changeState(3)">
                    <tabbaricon
                        :focused="currentIndex[3].isSelect"
                        :selectedImage="require('../../assets/ic_me_selected.png')"
                        :normalImage="require('../../assets/ic_me_normal.png')"
                    ></tabbaricon>
                    我
                </mt-tab-item>
            </mt-tabbar>
        </div>   
    </div>
</template>

<script>
import TabbarIcon from "./common/TabbarIcon.vue"// 图标组件
import MessageList from "./common/MessageList.vue"//面板中多条消息组件
import TitleBar from "./common/TitleBar.vue" //头部组件
export default {
    data(){
        return{
            active:"message",
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
        }
    },
    components:{
        "titlebar":TitleBar,
        "messagelist":MessageList,
        "tabbaricon":TabbarIcon
    },
    methods: {
        search(){console.log("搜索")},
        add(){console.log("添加")},
        changeState(idx){ //idx为当前单击的那一个
            // console.log("change"+idx);
            for(var i=0; i<this.currentIndex.length; i++){
                if(i==idx){
                    this.currentIndex[i].isSelect=true;
                }else{
                   this.currentIndex[i].isSelect=false; 
                }
            }
        }
    },
}
</script>

<style scoped>
    .page-tabbar{overflow: hidden;}
    .page-wrap{padding-bottom:60px;}
    .mint-tabbar > .mint-tab-item{color:#333}
    .mint-tabbar > .mint-tab-item.is-selected{color:#45c018}
</style>
