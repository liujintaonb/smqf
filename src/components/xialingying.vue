<template>
  <div class="famousteacher-box">
    <div class="famousteacher-box-banner-box swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
         <img src="../img/xialingying/banner.png" alt="">
        </div>
      </div>
    </div>
    <div class="Communal-box-bannerfooter" id="bannerBox">
      <img class="logo" style src="../img/logo/logo1.png" alt>
      <div class="Communal-box-bannerfooter-q">
        <div class="Communal-box-bannerfooter-div" @click="home">首页</div>
        <div class="Communal-box-bannerfooter-div" @click="curriculums">课程体系</div>
        <div class="Communal-box-bannerfooter-div">师资团队</div>
        <div class="Communal-box-bannerfooter-div" @click="elegantdisplay">学员天地</div>
        <div class="Communal-box-bannerfooter-div on" @click="xialingying">
         夏令营
       </div>
        <div class="Communal-box-bannerfooter-div" @click="aboutus">关于我们</div>
      </div>
    </div>

    <div class="xueyingyu-box">
      <div class="xueyingyu-box-box">
        <div class="xueyingyu-box-box-left">
          <img src="../img/xialingying/xueyingyu.png" alt="">
        </div>
        <div class="xueyingyu-box-box-center">
          <p style="font-size:60px;color:#FFFFFF;margin-bottom:40px">
            为什么要学英语
          </p>
          <p>
            单词背不过，听力听不懂！
          </p>
          <p>
            阅读不理解;写作没高分！
          </p>
          <p>
            单词记不住，忘了记，<span style="font-size:22px;color:#FFFFFF">没兴趣</span>，爱走神！
          </p>
          <p>
            这都是选择我们的理由！！！
          </p>
        </div>
        <div class="xueyingyu-box-box-right">
          <div>?</div>
        </div>
      </div>
    </div>

    <div class="kechengyoushi-box">
      <div class="title">课程优势</div>
      <div class="content-text" style="background:#F8E71C">
        <div class="left" >一强大的师资阵容</div>
        <div class="right"><img src="../img/xialingying/kechengtoushi1.png" alt=""></div>
      </div>
      <div class="content-text"style="background:#F5A623">
        <div class="left">二自主研发"6阶36段”课程体系</div>
        <div class="right"><img src="../img/xialingying/kechengtoushi2.png" alt=""></div>
      </div>
      <div class="content-text" style="background:#19793A">
        <div class="left" >三自主研发配套教材</div>
        <div class="right"><img src="../img/xialingying/kechengtoushi3.png" alt=""></div>
      </div>
      <div class="content-text" style="background:#9013FE">
        <div class="left" >四连续开展23期，教学效果明显</div>
        <div class="right"><img src="../img/xialingying/kechengtoushi4.png" alt=""></div>
      </div>
      <div class="content-text" style="background:#217DF6">
        <div class="left" >五课堂活跃，课程融入团队扩展、身心灵成长</div>
        <div class="right"><img src="../img/xialingying/kechengtoushi5.png" alt=""></div>
      </div>
    </div>

    <div class="kechengneirong">
      <div class="title">
        课程内容
      </div>
      <div class="kechengneirong-conetnt">
        <div class="top">
          <div class="left">
            <p style="color:#F8E71C;margin:10px 0;font-size:34px">
              强化发音基础
            </p>
            <p style="margin-bottom:40px">
              48个国际音标、28组辅音乐、20组元音规律
            </p>
            <p style="margin-bottom:20px;font-size:34px">
              单词词义记忆
            </p>
            <p style="margin-bottom:100px">
              速记初中2100个单词（高中3500个）
            </p>
          </div>
          <div class="right">
            <img src="../img/xialingying/kechengneirong1.png" alt="">
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../img/xialingying/kechengneirong2.png" alt="">
          </div>
          <div class="right">
            <p style="color:#F5A623;font-size:34px;margin:20px 0" >拼读能力训练能力训练</p>
            <p>确保能“见此能读、听词能写”</p>
            <p style="color:#9013FE;font-size:34px;margin:50px 0 20px 0">基础语法讲解</p>
            <p>自主研发“9853语法体系”</p>
            <p style="color:#217DF6;margin:40px 0 20px 0">思维导图训练</p>
            <p>讲英语思维、英语习惯根植到日常学习中</p>
          </div>
        </div>
      </div>
    </div>

    <div class="shizililiang" style="padding-top:100px">
      <div style="color:#19793A;font-size:34px;text-align:center;margin:100px 0">
        师资力量
      </div>
      <div style="overflow: hidden;width:80%;margin:0 auto">
      <div class="left" style="float:left;width:600px;height:300px;margin-right:100px" >
        <img style="width:100%;height:100%;" src="../img/xialingying/shizililiang.png" alt="">
      </div>
      <div class="right" style="float:left;" >
        <p style="width:200px;background:#19793A;color:#FFFFFF;lineht:30px;margin:0 auto;font-size:22px;text-align:center;margin-bottom:20px">Harvery Dzodin</p>
        <div style="width:400px;font-size:22px">
          Columnist for newspapers, magazines and websites;Director and Vice President Emeritus ABC TV Network;中国日报、环球时报专栏作家；美国前总统卡特办公室法律顾问；美国ABC网络电视副总裁；清华大学客座教授。
        </div>
      </div>
      </div>
    </div>

    <div class="xueyuanfankui-box">
      <div class="title">学院/家长反馈</div>
      <div class="conetnt">
        <img src="../img/xialingying/xueyuanfankui1.png" alt="">
        <img src="../img/xialingying/xueyuanfankui2.png" alt="">
        <img src="../img/xialingying/xueyuanfankui3.png" alt="">
        <img src="../img/xialingying/xueyuanfankui4.png" alt="">
        <img src="../img/xialingying/xueyuanfankui5.png" alt="">
        <img src="../img/xialingying/xueyuanfankui6.png" alt="">
      </div>
    </div>
      
     
         


    <smfooter></smfooter>
  </div>

  <!-- <div v-text="msg"></div> -->
</template>
<script src="../js/xialingying.js">
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

/*
iPad Pro
*/
@media screen and (min-width: 1000px) and(max-width:1025px) {
  .famousteacher-box-chuangyedaoshi {
    .famousteacher-title {
      .famousteacher-title-header {
        margin: 0.4rem 0 !important;
      }
    }
  }
}
/*
iPad 
*/
@media screen and (min-width: 600px) and(max-width:769px) {
  .famousteacher-box-chuangyedaoshi {
    .famousteacher-title {
      .famousteacher-title-header {
        margin: 0.3rem 0 !important;
      }
    }
  }
}
/*
  iphone678 Pulus
  */
@media screen and (min-width: 400px) and(max-width:416px) {
  .famousteacher-box-chuangyedaoshi {
    .famousteacher-title {
      .famousteacher-title-header {
        margin: 0.4rem 0 !important;
      }
    }
  }
}
/*
  360px
  */
@media screen and (min-width: 350px) and(max-width:361px) {
  .famousteacher-box-chuangyedaoshi {
    .famousteacher-title {
      .famousteacher-title-header {
        margin: 0.4rem 0 !important;
      }
    }
  }
}

/*
  iphone5 SE 320
  */
@media screen and (min-width: 200px) and(max-width:321px) {
  .famousteacher-box-chuangyedaoshi {
    .famousteacher-title {
      .famousteacher-title-header {
        margin: 0.4rem 0 !important;
      }
    }
  }
}

/*
  iphoneX 375
  */
@media screen and (min-width: 370px) and(max-width:376px) {
  .famousteacher-box-chuangyedaoshi {
    .famousteacher-title {
      .famousteacher-title-header {
        margin: 0.4rem 0 !important;
      }
    }
  }
}

//TOOD
.famousteacher-box {
  width: 100%;
  .famousteacher-box-banner-box {
    .swiper-wrapper {
      width: 100%;
     height:8rem ;
      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .famousteacher-box-chuangyedaoshi {
    width: 100%;
    margin: 1rem auto;
    text-align: center;
    .famousteacher-title {
      width: 100%;
      // margin-left: 10%;
      margin-bottom: 0.5rem;
      .famousteacher-title-header {
        font-size: 0.3rem;
        color: #3aca3a;
        margin: 1rem 0 0.6rem 0;
      }
      .famousteacher-title-footer-box {
        .famousteacher-title-footer {
          width: 80%;
          margin: 0 auto;
          font-size: 0.16rem;
          text-align: left;
          letter-spacing: 0.05rem;
        }
      }
    }
    .famousteacher-box-chuangyedaoshi-img-content {
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
      .famousteacher-box-chuangyedaoshi-img-content-box {
        float: left;
        width: 33%;
        height: 4.5rem;
        // margin-left: 8%;
        margin-bottom: 1rem;
        .img {
          width: 80%;
          height: 100%;
          margin: 0 auto;
          //  background: red;
          margin-bottom: 0.1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          font-size: 0.18rem;
          margin: 0.06rem 0;
        }
      }
    }
  }
  .famousteacher-box-jiaoyantuandui {
    width: 90%;
    margin: 0.5rem auto;
    text-align: center;
    .famousteacher-title {
      width: 90%;
      margin-left: 10%;
      margin-bottom: 0.5rem;
      .famousteacher-title-header {
        font-size: 0.4rem;
        color: green;
        margin: 1.5rem 0;
      }
    }
    .famousteacher-box-chuangyedaoshi-img-content {
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
      .famousteacher-box-chuangyedaoshi-img-content-box {
        float: left;
        width: 33%;
        height: 4.5rem;
        // margin-left: 8%;
        margin-bottom: 0.8rem;
        .img {
          width: 100%;
          height: 100%;
          //  background: red;
          img {
            width: 80%;
            height: 100%;
          }
        }
        .text {
          font-size: 0.22rem;
        }
      }
    }
  }
  .famousteacher-box-tejijiaoshituandui {
    width: 90%;
    margin: 0.5rem auto;
    text-align: center;
    .famousteacher-title {
      width: 90%;
      margin-left: 10%;
      margin-bottom: 0.5rem;
      .famousteacher-title-header {
        font-size: 0.4rem;
        color: green;
        margin: 1.5rem 0;
      }
    }
    .famousteacher-box-chuangyedaoshi-img-content {
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
      .famousteacher-box-chuangyedaoshi-img-content-box {
        float: left;
        width: 33%;
        height: 4.5rem;
        // margin-left: 8%;
        margin-bottom: 0.8rem;
        .img {
          width: 100%;
          height: 100%;
          //  background: red;
          img {
            width: 80%;
            height: 100%;
          }
        }
        .text {
          font-size: 0.22rem;
        }
      }
    }
  }
  .famousteacher-box-beijingmingshituandui {
    width: 90%;
    margin: 0.5rem auto;
    text-align: center;
    .famousteacher-title {
      width: 90%;
      margin-left: 10%;
      margin-bottom: 0.5rem;
      .famousteacher-title-header {
        font-size: 0.4rem;
        color: green;
        margin: 1.5rem 0;
      }
    }
    .famousteacher-box-chuangyedaoshi-img-content {
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
      .famousteacher-box-chuangyedaoshi-img-content-box {
        float: left;
        width: 33%;
        height: 4.5rem;
        // margin-left: 8%;
        margin-bottom: 0.8rem;
        .img {
          width: 100%;
          height: 100%;
          //  background: red;
          img {
            width: 80%;
            height: 100%;
          }
        }
        .text {
          font-size: 0.22rem;
        }
      }
    }
  }
  .famousteacher-box-qinghuabeidazhuangyuantuandui {
    width: 90%;
    margin: 0.5rem auto;
    text-align: center;
    .famousteacher-title {
      width: 90%;
      margin-left: 10%;
      margin-bottom: 0.5rem;
      .famousteacher-title-header {
        font-size: 0.4rem;
        color: green;
        margin: 1.5rem 0;
      }
    }
    .famousteacher-box-chuangyedaoshi-img-content {
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
      .famousteacher-box-chuangyedaoshi-img-content-box {
        float: left;
        width: 33%;
        height: 4.5rem;
        // margin-left: 8%;
        margin-bottom: 0.8rem;
        .img {
          width: 100%;
          height: 100%;
          //  background: red;
          img {
            width: 80%;
            height: 100%;
          }
        }
        .text {
          font-size: 0.22rem;
        }
      }
    }
  }
}

.xueyingyu-box{
  width: 80%;
  margin: 60px auto;
  background-color: #19793A;
  .xueyingyu-box-box{
    width: 100%;
    height:600px;
    position: relative;
    .xueyingyu-box-box-left{
      position: absolute;
      top: 60px;
      width:400px;
      height:600px;
      img{
        width:100%;
        height:100%;
      }
    }
    .xueyingyu-box-box-center{
      position: absolute;
      left:520px;
      top: 100px;
      p{
        color: #F8E71C;
        font-size:22px; 
        line-height:80px;
      }
    }
    .xueyingyu-box-box-right{
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      div{
      position: absolute;
      right: 13px;
      top: -160px;
      font-size:300px;
      color: white;
      transform: rotate(6deg);
      }
    }
  }
}
.kechengyoushi-box{
  margin:40px 0; 
  .title{
      color:#19793A;
      font-size: 40px;
      text-align:center;
      margin:100px 0; 
  }
  .content-text{
    width: 100%;
    height:200px ;
    .left{
      float: left;
      font-size:40px;
      margin-left: 200px;
      padding-top: 50px;
      color: black;
    }
    .right{
    float: left;
    position: relative;
    width:500px;
    height:200px;
    img{
      display:block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: -30px;
    }
    }
  }
}
.kechengneirong{
  .title{
    color: #19793A;
    font-size: 40px;
    text-align: center;
    margin: 100px 0;
  }
  .kechengneirong-conetnt{
    width: 80%;
    margin: 0 auto;
    .top{
      overflow: hidden;
    .left{
      float: left;
      margin-right:300px;
      p{
        color: #19793A;
        font-size: 22px
      }
    }
       .right{
      float: left;
      width:500px;
      height:400px;
      img{
        display:block;
        width: 100%;
        height: 100%;
        }
    }
    }
    .bottom{
      overflow: hidden;
        .left{
      float: left;
       width:500px;
      height:400px;
       margin-right:300px;
      img{
        display:block;
        width: 100%;
        height: 100%;
        }
    }
       .right{
      float: left;
       p{
        color: #19793A;
        font-size: 22px
      }
    }
    }
  }
}


.xueyuanfankui-box{
  padding-top:100px; 
  padding-bottom:100px;
  .title{
    font-size: 34px;
    color:#19793A;
    text-align: center;
    margin:100px 0; 
  }
  .conetnt{
    overflow: hidden;
    img{
      display:block;
      float: left;
      width:20%;
      margin:30px 6%; 
      height:500px;

    }
  }
}
</style>
