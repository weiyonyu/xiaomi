<template>
    <div class="header">
       <div class="nav-topbar">
           <div class="contanier">
               <div class="topbar-menu">
                   <a href="javascript:;">小米商城</a>
                   <a href="javascript:;">MUI</a>
                   <a href="javascript:;">云服务</a>
                   <a href="javascript:;">协议规则</a>
               </div>
               <div class="topbar-usr">
                   <a href="javascript:;" v-if="username">{{username}}</a>
                   <a href="javascript:;" v-else @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                   <a href="javascript:;" v-else>注册</a>
                   <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                   
               </div>
           </div>
       </div>
       <div class="nav-header">
           <div class="contanier">
               <div class="header-logo">
                   <a href="/#/index">
                   
                   </a>
               </div>
               <div class="header-menu">
                   <div class="item-menu">
                       <span>小米手机</span>
                       <div class="children">
                           <ul>
                               <li class="product" v-for="item in phoneList" :key="item.id">
                                   <a :href="'/#/prdouct/'+item.id" target="_blank">
                                       <div class="pro-img">
                                           <img :src="item.mainImage" alt="Item.subtitle">
                                       </div>
                                       <div class="pro-name">{{item.name}}</div>
                                       <div class="pro-price">{{item.price| currency}}</div>
                                   </a>
                               </li>
                              
                           </ul>
                           
                       </div>
                   </div>
                   <div class="item-menu">
                       <span>Redmi红米</span>
                       <div class="children">
                           <ul>
                               <li class="product" v-for="item in phoneList" :key="item.id">
                                   <a :href="'/#/prdouct/'+item.id" target="_blank">
                                       <div class="pro-img">
                                           <img :src="item.mainImage" alt="Item.subtitle">
                                       </div>
                                       <div class="pro-name">{{item.name}}</div>
                                       <div class="pro-price">{{item.price| currency}}</div>
                                   </a>
                               </li>
                              
                           </ul>
                           
                       </div>
                   </div>
                   <div class="item-menu">
                       <span>电视</span>
                      <div class="children">
                           <ul>
                               <li class="product" v-for="item in phoneList" :key="item.id">
                                   <a :href="'/#/prdouct/'+item.id" target="_blank">
                                       <div class="pro-img">
                                           <img :src="item.mainImage" alt="Item.subtitle">
                                       </div>
                                       <div class="pro-name">{{item.name}}</div>
                                       <div class="pro-price">{{item.price| currency}}</div>
                                   </a>
                               </li>
                              
                           </ul>
                           
                       </div>
                   </div>
               </div>
               <div class="header-search">
                   <div class="wrapper">
                       <input type="text" name="keyword">
                       <a href="javascript:;"></a>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
    return{
        username:'jack',
        phoneList:[]
        }
    },
    //过滤器
    filters:{
        currency(val){
             if(!val)return'0.00';
             //保留两位小数
             return "￥"+val.toFixed(2)+"元";
        }
       
    },
    mounted(){
        //调用方法
        this.getProductList();
    },
    methods:{
        login(){
            this.$router.push('/login')
        },
        getProductList(){
            //发送请求
            console.log(1)
            this.axios.get('/products',{
                parmas:{
                    categoryId:'100012'
                }
            }).then((res)=>{
                if(res.list.length>=6){
                    this.phoneList=res.list.slice(-6);
                }
            })
        },
        goToCart(){
            this.$router.push("/cart");
            /*
            //params传参 
                使用name
                this.$router.push({
                    name:'second',
                    params: {
                    id:'20180822',
                     name: 'query'
                    }
                })

                 //params接收参数
                this.id = this.$route.params.id ;
                this.name = this.$route.params.name ;


            //query传参，
                使用path跳转
                    this.$router.push({
                        path:'second',
                        query: {
                        queryId:'20180822',
                        queryName: 'query'
                                }
                        })

                    //query传参接收
                    this.queryName = this.$route.query.queryName;
                    this.queryId = this.$route.query.queryId;
             */
        }
    }
}


</script>
<style lang="scss">
//引入基础样式
@import '../assets/scss/base.scss';
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header{
    //顶部
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #B0B0B0;
    }
    //顶部黑色区域
        .contanier{       
        @include flex();
        width: 1226px;
        margin:0 auto;
        // display:flex;
        // justify-content: space-between;
        // align-items: center;
        a{
            display: inline-block;
            color: #B0B0B0;
            margin-right: 20px
        }
        .my-cart{
            width: 110px;
            background-color: #FF6600;
            text-align: center;
            color: #ffffff;
            .icon-cart{
                @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
                display: inline-block;
                // width: 16px;
                // height: 12px;
                // background: url("/imgs/icon-cart-checked.png") no-repeat center;
                //背景填充
                background-size: contain;
                margin-right: 5px;
                margin-top: 3px;
            }

        }
    }
    //顶部白色区域
    .nav-header{
        .contanier{
            position: relative;
            width: 1226px;
            height: 112px;
            
            margin: 0 auto;
            //logo设置
            .header-logo{
               display: inline-block;
               width: 55px;
               height: 55px;
                background-color: #FF6600;
                overflow: hidden;
               a{
                   display: inline-block;
                   width: 110px;
                   height:55px ;
                 
                  //图片切换1logo
                   &:before{
                       content: "";
                        @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                       display:inline-block;
                    //    width: 55px;
                    //    height: 55px;
                    //    background: url('/imgs/mi-logo.png')no-repeat center;
                    //    background-size: 55px;
                       transition:margin .2s;
                   }
                   //图片切换2home
                   &:after{
                       content: "";
                        @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                       display:inline-block;
                    //    width: 55px;
                    //    height: 55px;
                    //    background: url('/imgs/mi-home.png')no-repeat center;
                       background-size: 55px
                   }
                   &:hover:before{
                       margin-left:-55px;
                       transition: margin .2s;
                   }
               }
            }
            //一级选项
            .header-menu{
                
                width: 643px;
                display:inline-block;
                padding-left: 209px;
                .item-menu{
                    display:inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 120px;
                    margin-right: 20px;
                    span{
                    cursor: pointer;
                    overflow: hidden;
                }
                &:hover{
                    color:$colorA;
                    .children{
                        height: 220px;
                        opacity: 1;
                        background-color: #ffffff;
                    }
                }
                .children{
                    // display: none;
                    position: absolute;
                     height: 0px;
                     opacity: 0;
                    top:112px;
                    left: 0; 
                    width: 1226px;
                    border-top:1px solid #e5e5e5; 
                    box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                    z-index: 10;   
                    transition: all 0.5s;
                    //将溢出的poduct全部隐藏
                     overflow: hidden; 
                    a{
                        display: inline-block;
                    }
                    .product{
                        position: relative;
                        float: left;
                        width: 16.6%;
                        height: 220px;
                        line-height: 20px;
                        font-size: 12px;
                        text-align: center;
                        &::before{
                            content: "";
                            position:absolute;
                            top: 28px;
                            right: 0;
                            border-left: 1px solid $colorF;
                            height: 100px;
                            width: 1px;
                        }
                        &:last-child::before{
                           display:  none;
                        }
                       
                        img{
                            height: 110px;
                            width: auto;
                            margin-top: 26px
                        }
                        .pro-img{
                            height: 137px;
                        }
                        .pro-name{
                            font-weight: bold;
                            margin-top:19px;
                            margin-bottom: 8px;
                            color: $colorB; 
                        }
                        .pro-price{
                            color: $colorA;
                        }
                    }
                }
             }
                
               

            }
            //搜索框
            .header-search{
                
                width:319px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display :flex;
                    align-items: center;
                    //搜索输入框
                    input{
                        border: none;
                        box-sizing:border-box;
                        border-right:1px solid #e0e0e0; 
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    //搜索图标
                    a{
                        display: inline-block;
                         @include bgImg(18px,18px,"/imgs/icon-search.png");
                        // width: 18px;
                        // height: 18px;
                        // background:url("/imgs/icon-search.png")no-repeat center;
                        // background-size: contain;
                        margin-left:17px; 
                    }
                }
            }
        }
    }
}
</style>

