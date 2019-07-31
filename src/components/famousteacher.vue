<template>
  <div class="famousteacher-box">
    <div class="famousteacher-box-banner-box swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
      <img src="../img/banner/banner4.png" alt="">
        </div>
      </div>
    </div>
    <div class="Communal-box-bannerfooter" id="bannerBox">
      <img class="logo" style src="../img/logo/logo1.png" alt>
      <div class="Communal-box-bannerfooter-q">
        <div class="Communal-box-bannerfooter-div" @click="home">首页</div>
        <div class="Communal-box-bannerfooter-div" @click="curriculums">课程体系</div>
        <div class="Communal-box-bannerfooter-div on">师资团队</div>
        <div class="Communal-box-bannerfooter-div" @click="elegantdisplay">学员天地</div>
        <div class="Communal-box-bannerfooter-div" @click="xialingying">
         夏令营
       </div>
        <div class="Communal-box-bannerfooter-div" @click="aboutus">关于我们</div>
      </div>
    </div>

         <div class="peoplemessage-box-content-zhuanjia">
      <div class="title">专家团队</div>
         <Carousel  dots="none"  arrow="always"  v-model="value2" loop>
          <CarouselItem   v-for="(item) in beijingzhuanjiatuandui">
         <div class="demo-carousel" style="overflow: hidden;">
      <div class="footer"  v-for="(items) in item">
        <div class="footer-box">
          <div class="footer-text">
            <img :src="items.teacher_image" alt>
               <img class="item-logo" src="../img/logo/logo1.png" alt="">
          </div>
          <div class="footer-hide">
            <div class="footer-hide-text">
              <div class="footer-text-work">{{items.teacher_work}}</div>
              <div class="footer-text-name">{{items.teacher_name}}</div>
              <div class="footer-text-next">
            {{items.teacher_brief}}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
          </CarouselItem>
           </Carousel> 
    </div>

    <div class="peoplemessage-box-content-zhuanjia">
      <div class="title">创业导师</div>
         <Carousel  dots="none"  arrow="always"  v-model="value1" loop>
          <CarouselItem   v-for="(item) in chuangyedaoshi">
         <div class="demo-carousel" style="overflow: hidden;">
      <div class="footer"  v-for="(items) in item">
        <div class="footer-box">
          <div class="footer-text">
            <img :src="items.teacher_image" alt>
               <img class="item-logo" src="../img/logo/logo1.png" alt="">
          </div>
          <div class="footer-hide">
            <div class="footer-hide-text">
              <div class="footer-text-work">{{items.teacher_work}}</div>
              <div class="footer-text-name">{{items.teacher_name}}</div>
              <div class="footer-text-next">
            {{items.teacher_brief}}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
          </CarouselItem>
           </Carousel> 
    </div>


    <div class="peoplemessage-box-content-zhuanjia">
      <div class="title">教研团队</div>
           <Carousel  dots="none"  arrow="always"  v-model="value3" loop>
          <CarouselItem   v-for="(item) in jiaoyantuandui">
         <div class="demo-carousel" style="overflow: hidden;">
      <div class="footer"  v-for="(items) in item">
        <div class="footer-box">
          <div class="footer-text">
            <img :src="items.teacher_image" alt>
               <img class="item-logo" src="../img/logo/logo1.png" alt="">
          </div>
          <div class="footer-hide">
            <div class="footer-hide-text">
              <div class="footer-text-work">{{items.teacher_work}}</div>
              <div class="footer-text-name">{{items.teacher_name}}</div>
              <div class="footer-text-next">
            {{items.teacher_brief}}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
          </CarouselItem>
           </Carousel> 
    </div>

    <div class="peoplemessage-box-content-zhuanjia">
      <div class="title">特技教师团队</div>
            <Carousel  dots="none"  arrow="always"  v-model="value4" loop>
          <CarouselItem   v-for="(item) in tejijiaoshituandui">
         <div class="demo-carousel" style="overflow: hidden;">
      <div class="footer"  v-for="(items) in item">
        <div class="footer-box">
          <div class="footer-text">
            <img :src="items.teacher_image" alt>
               <img class="item-logo" src="../img/logo/logo1.png" alt="">
          </div>
          <div class="footer-hide">
            <div class="footer-hide-text">
              <div class="footer-text-work">{{items.teacher_work}}</div>
              <div class="footer-text-name">{{items.teacher_name}}</div>
              <div class="footer-text-next">
            {{items.teacher_brief}}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
          </CarouselItem>
           </Carousel>    
    </div>

    <div class="peoplemessage-box-content-zhuanjia">
      <div class="title">北京名师团队</div>
             <Carousel  dots="none"  arrow="always"  v-model="value5" loop>
          <CarouselItem   v-for="(item) in beijingmingshituandui">
         <div class="demo-carousel" style="overflow: hidden;">
      <div class="footer"  v-for="(items) in item">
        <div class="footer-box">
          <div class="footer-text">
            <img :src="items.teacher_image" alt>
               <img class="item-logo" src="../img/logo/logo1.png" alt="">
          </div>
          <div class="footer-hide">
            <div class="footer-hide-text">
              <div class="footer-text-work">{{items.teacher_work}}</div>
              <div class="footer-text-name">{{items.teacher_name}}</div>
              <div class="footer-text-next">
            {{items.teacher_brief}}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
          </CarouselItem>
           </Carousel>    
    </div>



        <div class="peoplemessage-box-content-zhuanjia">
      <div class="title">我们的外教</div>
           <Carousel  dots="none"  arrow="always"  v-model="value6" loop>
          <CarouselItem   v-for="(item) in womendewaijiao">
         <div class="demo-carousel" style="overflow: hidden;">
      <div class="footer"  v-for="(items) in item">
        <div class="footer-box">
          <div class="footer-text">
            <img :src="items.teacher_image" alt>
               <img class="item-logo" src="../img/logo/logo1.png" alt="">
          </div>
          <div class="footer-hide">
            <div class="footer-hide-text">
              <div class="footer-text-work">{{items.teacher_work}}</div>
              <div class="footer-text-name">{{items.teacher_name}}</div>
              <div class="footer-text-next">
            {{items.teacher_brief}}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
          </CarouselItem>
           </Carousel>    

    </div>

    <div class="peoplemessage-box-content-zhuanjia">
      <div class="title">清华北大状元团队</div>
              <Carousel  dots="none"  arrow="always"  v-model="value7" loop>
          <CarouselItem   v-for="(item) in qinghuabeidazhuangyuantuandui">
         <div class="demo-carousel" style="overflow: hidden;">
      <div class="footer"  v-for="(items) in item">
        <div class="footer-box">
          <div class="footer-text">
            <img :src="items.teacher_image" alt>
               <img class="item-logo" src="../img/logo/logo1.png" alt="">
          </div>
          <div class="footer-hide">
            <div class="footer-hide-text">
              <div class="footer-text-work">{{items.teacher_work}}</div>
              <div class="footer-text-name">{{items.teacher_name}}</div>
              <div class="footer-text-next">
            {{items.teacher_brief}}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
          </CarouselItem>
           </Carousel>  
    </div>

    <smfooter></smfooter>
  </div>

  <!-- <div v-text="msg"></div> -->
</template>
<script src="../js/famousteacher.js"></script>
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
</style>
