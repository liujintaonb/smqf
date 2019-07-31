<template>
<div class="elegantdisplay-box">
<div class="elegantdisplay-box-banner-box swiper-container">
    <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">
          <img src="../img/1.jpg" alt="">
        </div> -->
        <!-- <div class="swiper-slide">  <img src="../img/2.jpg" alt=""></div> -->
        <div class="swiper-slide"><img src="../img/banner/banner3.png" alt=""></div>
    </div>
</div>
<div class="Communal-box-bannerfooter" id="bannerBox">
  <img class="logo" style="" src="../img/logo/logo1.png" alt="">
  <div class="Communal-box-bannerfooter-q">
       <div class="Communal-box-bannerfooter-div" @click="home">
         首页
       </div>
       <div class="Communal-box-bannerfooter-div" @click="curriculums">
         课程体系
       </div>
       <div class="Communal-box-bannerfooter-div" @click="famousteacher">
         师资团队
       </div>
       <div class="Communal-box-bannerfooter-div on">
         学员天地
       </div>
       <div class="Communal-box-bannerfooter-div" @click="xialingying">
         夏令营
       </div>
       <div class="Communal-box-bannerfooter-div" @click="aboutus">
         关于我们
    </div>
       </div>

</div>
<div class="elegantdisplay-box-xueyuananli">
    <div class="famousteacher-title">
     <div class="famousteacher-title-header">学员案例</div>
    </div>
    <div class="famousteacher-box-chuangyedaoshi-img-content">
        <div class="famousteacher-box-chuangyedaoshi-img-content-box" v-for="item of xueyuananliArr">
            <div class="img">
              <img v-lazy="item.imgSrc" alt="">
              <img class="item-logo" v-lazy="item.logo" alt="">
            </div>
            <div class="text">{{item.name}}</div>
            <div class="footer">{{item.work}}</div>
        </div>
    </div>
</div>
 
 <smfooter></smfooter>
</div>


<!-- <div v-text="msg"></div> -->
</template>
<script src="../js/elegantdisplay.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.elegantdisplay-box{
  width: 100%;
    .elegantdisplay-box-banner-box {
    .swiper-wrapper{
      width: 100%;
     height:8rem ;
      .swiper-slide{
        img{
          width:100%;
          height: 100%;
        }
      }
    }
  }

    
  
  .elegantdisplay-box-xueyuananli{
      width: 100%;
      margin: 1rem auto;
      text-align: center;
      .famousteacher-title{
        width: 100%;
          margin-bottom: 0.5rem;
          .famousteacher-title-header{
              font-size: 0.3rem;
            color: #3aca3a;
            margin-bottom: 0.3rem;
          }
          .famousteacher-title-footer{
           font-size: 0.2rem;
           text-align: left;
           letter-spacing: 0.05rem;
          }
      }
      .famousteacher-box-chuangyedaoshi-img-content{
          overflow: hidden;
          width: 100%;
          margin: 0 auto;
          .famousteacher-box-chuangyedaoshi-img-content-box{
              float: left;
                width:25%;
                // height:3rem;
                // margin-left: 8%;
                margin-bottom: 0.8rem;
              .img{
                position: relative;
               width: 80%;
               height:4.5rem;
              margin: 0 auto;
               img{
               width: 100%;
               height:100%;
               }
               .item-logo{
                 position: absolute;
                 top: 0;
                 left: 0;
                 width:0.4rem;
                 height:0.4rem;
               }
              }
              .text{
                 font-size: 0.22rem;
                 color: #3aca3a;
                 margin: 0.16rem 0;
              }
              .footer{
                width: 80%;
                margin: 0 auto;
                  // margin-left: 0.1rem;
                  font-size: 0.18rem;
                  text-align: left;
                  color: rgb(194, 189, 189);
                  letter-spacing: 0.03rem;
              }
          }
      }
  }
}
</style>
