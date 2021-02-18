<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            
<a href="javascript:;">小米商城</a><span>|</span>
<a href="javascript:;">MIUI</a><span>|</span>
<a href="javascript:;">米家</a><span>|</span>
<a href="javascript:;"> 米聊</a><span>|</span>
<a href="javascript:;">小米天猫店</a><span>|</span>
 <div class="copyright">
            <a href=""><a href="javascript:;">© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号 </a></a>
        </div>
        </div> 
       
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
.footer{
    height: 234px;
    background-color: #333333;
    border-top: 4px solid $colorA;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 15px;
        img{
        width: 53px;
        height: 36px;
        margin-bottom: 31px;
        }
    }
    .footer-link{
        a{
            color: #999999;
            display: inline-block
        }
        span{
            margin: 0 10px
        }
        .copyright{
            margin-top: 10px;
        }
    }
   
}
</style>
