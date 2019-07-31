<template>
<div class="index-box">
<div class="index-box-banner-box swiper-container">
        <Carousel dots="none" arrow="always" autoplay v-model="value2" loop>
        <CarouselItem v-for="item in bannerImgArr">
            <div class="demo-carousel"><img  style="width:100%;height:8rem" :src="item.imgSrc"></div>
        </CarouselItem>
    </Carousel>
</div>
<div class="Communal-box-bannerfooter" id="bannerBox">
  <img class="logo" style="" src="../img/logo/logo1.png" alt="">
  <div class="Communal-box-bannerfooter-q">
        <div class="Communal-box-bannerfooter-div on">
         首页
       </div>
       <div class="Communal-box-bannerfooter-div" @click="curriculums">
         课程体系
       </div>
       <div class="Communal-box-bannerfooter-div" @click="famousteacher">
         师资团队
       </div>
       <div class="Communal-box-bannerfooter-div" @click="elegantdisplay">
         学员天地
       </div>
        <div class="Communal-box-bannerfooter-div" @click="xialingying">
         夏令营
       </div>
       <div class="Communal-box-bannerfooter-div" @click="aboutus">
         关于我们
       </div>
       <!-- <div class="userName" style="margin-top:0.17rem;line-height: 0.7rem;color: #3aca3a;font-size:0.16rem;float: right;" v-show="userNameBox" v-text="userName"></div> -->
         <div class="Communal-box-bannerfooter-h"v-show="userNameBox">
          <div class="on userlogin" v-text="userName"></div>
          <div @click="deleUser">注销</div>
       </div>
       <div class="Communal-box-bannerfooter-h" v-show="loginBox">
          <div @click="goLogin">登陆</div>
          <div @click="goRegister">注册</div>
       </div>
  </div>
  </div>
  <div class="index-box-content-kecheng">
    <div class="index-box-content-kecheng-header">
       <div class="index-box-content-kecheng-header-a">课程体系</div>
       <div class="index-box-content-kecheng-header-b">突破"哑巴英语"一对一更有保障</div>
    </div>
    <div class="index-box-content-kecheng-footer">
      <div class="div-box">
      <div class="div1">同步辅导</div>
      </div>
       <div class="div-box">
      <div class="div2">口语课程</div>
      </div>
       <div class="div-box">
      <div class="div3">词汇课程</div>
    </div>
    </div>
  </div>
  <div class="index-box-content-guanyu">
    <div class="index-box-content-guanyu-left">
      <div>
        <img src="../img/index-tixi.png" alt="">
        <div class="img-background-g"></div>
      </div>
    </div>
    <div class="index-box-content-guanyu-right">
      <div class="index-box-content-guanyu-right-header">
        <div class="title">
          关于我们
          <span>ABOUT US</span>
        </div>
        <div class="content">
            北京水木清芬教育科技有限公司成立于2014年12月30日，总部设在清华大学，是国内专门从事学习方法研究与培训，以英语为核心开展学科辅导的综合型培训机构。课程体系由清华北大北师大中科院等名校专家与教研团队精心研发，主要分学生学习力培训和学科提分培训两大体系。
          </div>   
          <div class="footer" @click="divBtnGoAboutus">
            了解更多
          </div>
      </div>
    </div>
  </div>
  <div class="index-box-time">
   
   <div class="time">
   <div class="header">
    2014
    <span>年</span>
   </div>
   <div class="footer">
    正式成立营业
   </div>
  </div> 
  <div class="time">
  <div class="header">
    100
    <span>+</span>
  </div>
  <div class="footer">
   优秀教师
  </div>
 </div> 
  <div class="time">
  <div class="header">
    1000
    <span>+</span>
  </div>
  <div class="footer">
   优秀学员
  </div>
  </div>
   <div class="time" style="border:none">
  <div class="header">
    10
    <span>+</span>
  </div>
  <div class="footer">
   制定课程
  </div>
   </div>
  </div>
  <div class="index-box-content-mingshi">
    <div class="index-box-content-mingshi-header">
      <div class="title">名师一对一" <span> 私人订制</span>"课程</div>
      <div class="text">清华北大一对一,多样化教学,激发兴趣,培养思维</div>
    </div>
    <div class="index-box-content-mingshi-footer">
      <div class="footer-box" v-for="(item,index) in shipinArr">
      <div class="index-box-content-mingshi-footer-text">
        <img v-lazy="item.imgSrc" alt="">
        <span class="span-color"></span>
        <span class="span-text">{{item.title}}</span>  
        <div class="div-text">小学英语交互小学英语交互小学英语交互小学英语交互小学英语交互小学英语交互小学英语交互小学英语交互小学英语交互</div>
        <div class="div-btn" @click="getVideoShow(index)">免费试听</div>
      </div>
      </div>
    </div>
  </div>
  <div class="peoplemessage-box-content-zhuanjia">
    <div class="title">专家团队</div>
             <Carousel  dots="none"  arrow="always"  v-model="value1" loop>
          <CarouselItem   v-for="(item) in zhuanjiatuanduiArr">
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
    <div class="div-btn" @click="divBtnGoFamousteacher">了解更多</div>
  </div>
  <div class="index-box-content-zoujinxuexiao">
      <div class="title">走进公立学校</div>
      <div class="footer">
      <div class="index-box-content-zoujinxuexiao-text">
        <span></span>
        荧阳第四初级中学
      </div>
      <div class="index-box-content-zoujinxuexiao-text">
        <span></span>
        北京汇佳中学
      </div>
      <div class="index-box-content-zoujinxuexiao-text">
        <span></span>
        洛阳四十三中学
      </div>
      <div class="index-box-content-zoujinxuexiao-text">
        <span></span>
        广东韶关
      </div>
      
      <div class="index-box-content-zoujinxuexiao-text">
        <span></span>
        浙江宁波职业技术学院
      </div>
      <div class="index-box-content-zoujinxuexiao-text">
        <span></span>
        许昌第三中学
      </div>
      <div class="index-box-content-zoujinxuexiao-text">
        <span></span>
        任丘第六实验小学
      </div>
      </div>
  </div>
  <smfooter></smfooter>
  <videocom  ref="showVideo"></videocom>
</div>
<!-- <div v-text="msg"></div> -->
</template>
<script src="../js/index.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


//TOOD
.index-box{
  width: 100%;
  .index-box-banner-box {
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

  .index-box-content-kecheng{
    // width:98% ;
    padding:1rem 0.5rem;
    .index-box-content-kecheng-header{
      margin-bottom:0.6rem;
      .index-box-content-kecheng-header-a{
        width: 100%;
        margin-bottom: 0.05rem;
        color: #3aca3a;
      font-size:0.3rem;
      text-align:center;
      }
      .index-box-content-kecheng-header-b{
        width: 100%;
        font-size: 0.20rem;
        color: rgb(161, 158, 158);
        text-align: center;
        letter-spacing: 0.04rem;
      }
    }
    .index-box-content-kecheng-footer{
      overflow: hidden;
      .div-box{
        width:33.33%;
        float: left;
       div{
      width:1.6rem;
      height:1.6rem;
      border-radius: 50%;
      background:orange;
      margin: 0 auto;
      font-size:0.24rem;
      line-height:1.6rem; 
      text-align: center;
      color: beige;
      }
      .div1{
  background: #fd8734;
      }
      .div2{
background: #f26665;
      }
      .div3{
 background: #32a597;
      }
      }

    }
  }
  .index-box-content-guanyu{
    overflow: hidden;
    // padding-right: 1rem;
    .index-box-content-guanyu-left{
      float: left;
      width: 55%;
      div{
        width:100%;
        height:5.5rem;
        margin-right: 0.3rem;
        // background: red;
        img{
          display: block;
          width: 100%;
          height:5rem;
        }
        .img-background-g{
          width: 100%;
          height:0.5rem;
        background: #19793a;
        }
    
      }
    }
    .index-box-content-guanyu-right{
 float:right;
 width: 45%;
 text-align:center;
 .index-box-content-guanyu-right-header{
   .title{
     font-size: 0.3rem;
     text-align: center;
     color: green;
     margin-bottom: 0.1rem;
     span{
       font-size: 0.26rem;
       color:rgb(196, 194, 194);
     }
   }
   .content{
     font-size: 0.14rem;
     width: 3rem;
      margin:  0.5rem auto 2.7rem;
    //  margin-bottom: 0.2rem;
     letter-spacing:1px;
     text-align: left;
   }
   .footer{
     width: 1.5rem;
     font-size: 0.18rem;
      background: #19793a;
     text-align:center;
     color: beige;
     cursor: pointer;
     line-height:0.3rem;
     border-radius:0.06rem; 
     margin:0 auto; 
   }
 }
    }
  }
 
   .index-box-time{
        // width:12rem;
    margin: 0 auto;
    text-align:center;
    padding:1.3rem 0;
    .time{
      display: inline-block;
      border-right:1px solid  rgb(172, 172, 172);
      padding:0 0.9rem;
      // margin:0 1rem;
      .header{
        font-size: 0.36rem;
        span{
         font-size: 0.24rem;
         color: rgb(172, 172, 172);
         position: relative;
         bottom: 0.04rem;
        }
      }
      .footer{
        font-size: 0.16rem;
       color: rgb(172, 172, 172);
       text-indent: 0.08rem;
      }
    }
  }

 .index-box-content-mingshi{
   margin-bottom: 1.3rem;
   overflow: hidden;
   .index-box-content-mingshi-header{
     width: 100%;
     margin: 0 auto;
     text-align: center;
     .title{
       font-size: 0.3rem;
       letter-spacing:0.08rem;
       margin-bottom: 0.03rem;
       span{
         color: rgb(139, 72, 202)
       }
     }
     .text{
       font-size: 0.2rem;
       margin-bottom: 0.4rem;
       letter-spacing: 0.1rem;
       color: rgb(190, 180, 180);
     }
   }
 .index-box-content-mingshi-footer{
       .index-box-content-mingshi-footer-text:hover{
     box-shadow: 5px 5px 10px rgba(0,0,0,.05), -5px 0 10px rgba(0,0,0,.05);
    // cursor: pointer;
    transform: translate3d(0,-10px,0);
      }
  //  width:90%;
  //  margin:0 auto ;
  position:  relative;
  left: 50%;
  transform:translate(-42%);
  //  margin-top: 0.6rem 1rem 1rem 1rem;
   overflow: hidden;
   .index-box-content-mingshi-footer-footer{
     position: relative;
     left: 14%;
     clear: both;
    //  overflow: hidden;
    //  width:66%;
     margin:0 auto ;
        .footer-box2{
     width: 28%;
     float: left;
  
   .index-box-content-mingshi-footer-text{
        width:80%;
     border: 1px solid rgb(201, 199, 197);
    margin:0 auto; 
    padding:0.2rem ;
    border-radius: 0.12rem;
      img{
      display: block; 
      width: 100%;
      height:3rem;
      margin-bottom: 0.15rem;
     }
     .span-color{
      //  display: block;
      display:inline-block;
      margin: 0;
       width: 0.09rem;
       height: 0.09rem;
       border-radius: 50%;
       background-color: green;
     }
     .span-text{
       display: inline-block;
       margin: 0;
       font-size: 0.16rem;
       color: black;
     }
     .div-text{
       font-size: 0.12rem;
       color: rgb(172, 172, 172);
       margin-bottom: 0.2rem;
       letter-spacing: 0.01rem;
     }
     .div-btn{
       width: 2rem;
       margin: 0 auto;
       border-radius: 0.06rem;
       line-height: 0.3rem;
       font-size: 0.16rem;
       text-align: center;
       color: aliceblue;
      background-color: rgb(159, 120, 196);
      cursor: pointer;
     }
   }
   }
   }

   .footer-box{
     width: 28%;
     float: left;
     margin:0.5rem 0; 
   .index-box-content-mingshi-footer-text{
    //  padding:0 0.2rem 0.4rem 0.2rem; ;
    //  float: left;
        width:80%;
        // height:4rem; 
     border: 1px solid rgb(201, 199, 197);
    //  margin:0.2rem 0.3rem ;
    border-radius: 0.12rem;
     margin:0 auto; 
       padding:0.2rem ;
      img{
      display: block; 
       width: 100%;
      height:3rem;
      margin-bottom: 0.15rem;
     }
     .span-color{
      //  display: block;
      display:inline-block;
      margin: 0;
       width: 0.09rem;
       height: 0.09rem;
       border-radius: 50%;
       background-color: green;
     }
     .span-text{
       display: inline-block;
       margin: 0;
       font-size: 0.16rem;
       color: black;
     }
     .div-text{
       font-size: 0.12rem;
       color: rgb(172, 172, 172);
       margin-bottom: 0.2rem;
       letter-spacing: 0.01rem;
     }
     .div-btn{
       width: 2rem;
       margin: 0 auto;
       border-radius: 0.06rem;
       line-height: 0.3rem;
       font-size: 0.16rem;
       text-align: center;
       color: aliceblue;
      background-color: rgb(159, 120, 196);
      cursor: pointer;
     }
     .div-btn:hover{
         background-color:#3aca3a;
     }
   }
   }
   
 }
 }
//  .index-box-content-zhuanjia{
//    padding:0.8rem;
//    overflow: hidden;
//    background: rgb(243, 239, 239);
//    .title{
//      color: #3aca3a;
//      font-size: 0.36rem;
//      text-align: center;
//      margin-bottom:0.7rem;
//    }
//    .footer{
//      width:33%;
//     //  margin:0 0.5rem ;
//     //  position: relative;
//      float: left;
//      overflow: hidden;
//      .footer-box{
//        width: 50%;
//        margin:0 auto 0.2rem;;
//        position: relative;
//        cursor: pointer;
//        overflow: hidden;
//      .footer-text{
//        width: 100%;
//        img{
//          display: block;
//        width: 100%;
//        height:3rem;
//        }
//      }
//      }
//      .footer-hide{
//        padding-top: 0.3rem;
//      height:3rem;
//      overflow: hidden;
//      background: rgba(43, 41, 41, 0.8);
//        position:absolute;
//        top:70%;
//       transition: top 0.3s;
//       .footer-hide-text{
//         margin: 0 !important;
//              .footer-text-work{
//        color: white;
//        font-size: 0.16rem;
//       //  text-align: center;
//        margin-bottom: 0.05rem;
//          text-align:  center;
//      }
//      .footer-text-name{
//              color: white;
//        font-size: 0.14rem;
//       margin: 0.1rem 0;
//       text-align:  center;
//      }
//      .footer-text-next{
//       color: white;
//         // margin:30% auto 0;
//            text-align:center;
//            font-size: 0.12rem;
//           color: beige;
//           letter-spacing: 0.01rem;
//      }
         
//       }
//       //  opacity: 0.5;
//      }
//    }
//    .div-btn{
//      clear: both;
//      position: relative;
//      width: 1.2rem;
//      top: 0.4rem;
//      margin:0 auto ;
//      line-height:0.3rem;
//      text-align: center;
//      padding:0 0.2rem;
//       background: #19793a;
//      font-size: 0.16rem;
//      color: beige;
//      cursor: pointer;
//    }
//    .footer-box:hover .footer-hide{
//     //       box-shadow: 5px 5px 10px rgba(0,0,0,.05), -5px 0 10px rgba(0,0,0,.05);
//     // cursor: pointer;
//     // width: 500px;
//     // opacity: 1;
//     // transition:width 10s;
//     // // transition: opacity .5s;
//     //  display: block;
//     // opacity: 1;
//     top: 0;
//    }
//  }

 .index-box-content-zoujinxuexiao{
  background: #19793a;
  //  padding-left: 1rem;
  //  padding-top: 0.02rem;
   padding: 0.1rem 0 0.6rem;
    width: 100%;
   .title{
     width: 3rem;
     margin:0.6rem auto ;
     text-align: center;
     font-size: 0.3rem;
     color: beige;
   }
   .footer{
     overflow: hidden;
    //  text-align:  center;
   .index-box-content-zoujinxuexiao-text{
     float: left;
    // display: inline-block;
    // width:30%;
     width: 2.1rem; 
     color: beige;
     font-size: 0.2rem;
     margin:0.16rem 1rem ;
     span{
       vertical-align: center;
       position: relative;
       top: -0.02rem;
       width:0.04rem;
       height: 0.04rem;
       border-radius: 50%;
       display:inline-block;
       background: beige;
     }
   }
   }
 }

}
</style>
