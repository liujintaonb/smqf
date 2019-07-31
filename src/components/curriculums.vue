<template>
<div class="curriculums-box">
<div class="curriculums-box-banner-box swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../img/banner/banner2.png" alt=""></div>
    </div>
</div>
<div class="Communal-box-bannerfooter" id="bannerBox">
    <img class="logo" style="" src="../img/logo/logo1.png" alt="">
 <div class="Communal-box-bannerfooter-q">
       <div class="Communal-box-bannerfooter-div" @click="home">
         首页
       </div>
       <div class="Communal-box-bannerfooter-div on">
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
       <div class="Communal-box-bannerfooter-div" @click="elegantdisplay">
         关于我们
       </div>
  </div>
</div>
<div class="curriculums-box-usjiaoxue">
    <div class="title">
        <div class="title-header">
            我们的教学理念
        </div>
        <div class="title-footer">
            打造国内首创智慧型课程体系  给予孩子一个会创作的大脑
        </div>
    </div>
    <div class="footer">
        <div class="footer-left">
            <div class="footer-left-img">
                <img src="../img/curriculumsImg/curriculumsImg-jiaoxue1.png" alt="">
            </div>
        </div>
        <div class="footer-right">
            <div class="right-text">
                <div class="right-text-left left-text1">01</div>
                <div class="right-text-right">
                    <div class="right-text-right-header">
                        思维开拓
                    </div>
                    <div class="right-text-right-footer">
                       播下一种思想收获一种行为，播下一种行为收获一种习惯。借鉴清华北大状元学习思维，建立高效思维方式，我们自主研发出“A.E 6阶36段英语体系”、 “98533 语法体系”、“触目经心记忆法”，培养学生的学习兴趣，提升学生的学习能力。
                    </div>
                </div>
            </div>
             <div class="right-text">
                <div class="right-text-left left-text2">02</div>
                <div class="right-text-right">
                    <div class="right-text-right-header">
                        能力培养
                    </div>
                    <div class="right-text-right-footer">
                       听：培养识别灵敏、理解准确的听力能力。<br>
说：培养发音清晰、表达流利的口语能力。<br>
读：培养思维缜密、逻辑清晰、统筹全局的阅读能力。<br>
写：培养语言地道、表达清晰、视野开拓的写作能力。
                    </div>
                </div>
            </div>
             <div class="right-text">
                <div class="right-text-left left-text3">03</div>
                <div class="right-text-right">
                    <div class="right-text-right-header">
                        知识传授
                    </div>
                    <div class="right-text-right-footer">
                        词汇： 少儿英语  小学词汇  初中词汇  高中词汇  四、六级  托福雅思 考研 考博
语法： 《思维导图学初中语法》、《思维导图学高中语法》
课程同步： 小学一对一  初中一对一  高中一对一  托福雅思一对一 
集训： 《初中英语词汇夏令营》《高中英语词汇夏令营》《英语演说家》《高考阅读理解班》
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="curericulums-box-us-jingpin">
    <div class="title">
        <div class="title-header">我们的精品课程</div>
        <div class="title-footer">打造层级递进式课程体系， 给孩子一个会学习的大脑</div>
    </div>
    <div class="footer" v-for="(item,index) of currVideoArr">
        <div class="footer-left">
            <div class="footer-left-img">
                   <img v-lazy="item.imgSrc" alt="">
            </div>
        </div>
        <div class="footer-right">
            <div class="footer-right-content">
                <div class="footer-right-content-header">{{item.kecheng}}</div>
                 <div class="footer-right-content-text">本课程转为小学阶段的孩子而设，针对不同层次的学生，提供小班分层教学，<br>让学的快的孩子多学点，让学的慢的孩子学的扎实点</div>
                  <div class="footer-right-content-renqun">适合人群:<span>适合3~12岁的所有孩子</span></div>
                   <div class="footer-right-content-xueshi">课程学时:<span>一学期20课时，每课2.5小时，每周两次课，5个月内上完课程</span></div>
                    <div class="footer-right-content-money">价格:<span>{{item.money}}</span></div>
                     <div class="footer-right-content-btn" @click="getVideo(index)">免费试听</div>
            </div>
        </div>
    </div>
</div>
<smfooter></smfooter>
  <videocom  ref="showVideo"></videocom>
</div>
<!-- <div v-text="msg"></div> -->
</template>
<script src="../js/curriculums.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*
iPad Pro
*/
@media screen and (min-width:1000px) and(max-width:1200px) {
 .curriculums-box-usjiaoxue{
     .footer{
         .footer-left{
             width: 50% !important;
             height:5.8rem !important;
                 margin: 0.6rem 0 !important;
         }
         .footer-right{
               width: 50% !important;
             .right-text-left{
                 font-size: 0.6rem !important;
             }
         }
     }
 }
 .curericulums-box-us-jingpin{
 .title{
     .title-footer{
         letter-spacing: 0 !important;
     }
    }
    .footer{
        .footer-left{
            height: 3rem !important;
        }
    }
 }

}
/*
iPad 
*/
@media screen and (min-width: 600px) and(max-width:769px) {

 .curriculums-box-usjiaoxue{
     .footer{
         .footer-left{
             width: 50% !important;
             height: 6.6rem !important;
                 margin: 0.6rem 0 !important;
         }
         .footer-right{
               width: 50% !important;
             .right-text-left{
                 font-size: 0.6rem !important;
             }
         }
     }
 }
 .curericulums-box-us-jingpin{
 .title{
     .title-footer{
         letter-spacing: 0 !important;
     }
    }
    .footer{
        .footer-left{
            height: 3.4rem !important;
        }
    }
 }

}
/*
  iphone678 Pulus
  */
@media screen and (min-width: 400px) and(max-width:416px) {

.curriculums-box-usjiaoxue{
    .footer{
        .footer-left{
            width: 45% !important;
            height: 6rem !important;
        }
        .footer-right{
            width:55% !important ;
            .right-text{
                .right-text-left{
                   width: 15% !important;
                   margin-right:3% !important;
                   font-size: 0.6rem !important;
                   position: relative;
                   top: 50% !important;
                }
                .right-text-right{
                  width: 80% !important;
                  margin:0 !important;
                }
            }
        }
    }
}
 .curericulums-box-us-jingpin{
 .title{
     .title-footer{
         letter-spacing: 0 !important;
     }
    }
    .footer{
        .footer-left{
            height: 4.4rem !important;
        }
    }
 }

}
  /*
  360px
  */
@media screen and (min-width:350px) and(max-width:361px){

 .curriculums-box-usjiaoxue{
     .footer{
         .footer-left{
             height: 12.6rem !important;
         }
     }
 }
 .curericulums-box-us-jingpin{
 .title{
     .title-footer{
         letter-spacing: 0 !important;
     }
    }
    .footer{
        .footer-left{
            height: 5.4rem !important;
        }
    }
 }

}

  /*
  iphone5 SE 320
  */
@media screen and (min-width:200px) and(max-width:321px){
.curriculums-box-usjiaoxue{
    .footer{
        .footer-left{
            width: 45% !important;
            height: 8.8rem !important;
        }
        .footer-right{
            width:55% !important ;
            .right-text{
                .right-text-left{
                   width: 15% !important;
                   margin-right:3% !important;
                   font-size: 0.68rem !important;
                }
                .right-text-right{
                  width: 80% !important;
                  margin:0 !important;
                }
            }
        }
    }
}
 .curericulums-box-us-jingpin{
 .title{
     .title-footer{
         letter-spacing: 0 !important;
     }
    }
    .footer{
        .footer-left{
            height: 5.8rem !important;
        }
    }
 }
}


/*
  iphoneX 375
  */
@media screen and (min-width:370px) and(max-width:376px){

.curriculums-box-usjiaoxue{
    .footer{
        .footer-left{
            width: 45% !important;
            height: 7.5rem !important;
        }
        .footer-right{
            width:55% !important ;
            .right-text{
                .right-text-left{
                   width: 15% !important;
                   margin-right:3% !important;
                   font-size: 0.6rem !important;
                }
                .right-text-right{
                  width: 80% !important;
                  margin:0 !important;
                }
            }
        }
    }
}

 .curericulums-box-us-jingpin{
  .title{
     .title-footer{
         letter-spacing: 0 !important;
      }
    }
    .footer{
        .footer-left{
            height: 5.1rem !important;
        }
    }
 }

}



















//TOOD
.curriculums-box{
  width: 100%;
    .curriculums-box-banner-box {
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
  .curriculums-box-usjiaoxue{
      padding:1rem 0 ;
      .title{
          width:100%;
          margin:0 auto ;
        //   margin-top: 1rem;
          margin-bottom:1rem;
          text-align: center;
          .title-header{
              font-size: 0.3rem;
               color: #3aca3a;
               margin-bottom: 0.1rem;
               letter-spacing: 0.05rem;
          }
          .title-footer{
              font-size: 0.20rem;
            color: rgb(182, 175, 175);
            letter-spacing: 0.04rem;
          }
      }
      .footer{
          overflow: hidden;
          .footer-left{
              float: left;
              width:60%;
              height:4.4rem;
                margin:0.8rem 0; 
              .footer-left-img{
                  display: block;
                  width:50%;
                  height:100%;
                  margin:0 auto ;
                //   background: red;
                img{
                    width: 100%;
                    height: 100%;
                }
              }
          }
          .footer-right{
              float:right;
              width:40%;
              .right-text{
                  margin:0.4rem 0; 
                  overflow: hidden;
                  .right-text-left{
                //    float: left;
                width: 10%;
                margin-right: 5%;
                display: inline-block;
                   font-size:0.8rem;
                  }
                  .left-text1{
                    color: #f8c045;
                   }
                     .left-text2{
                  color: #57c39d;
                   }
                     .left-text3{
                     color: #4a9af7;
                   }
                  .right-text-right{
                        width: 60%;
                    //   float:right;
                    display: inline-block;
                      margin-right: 0.2rem;
                      .right-text-right-header{
                          font-size: 0.18rem;
                      }
                       .right-text-right-footer{
                          font-size: 0.14rem;
                          color: rgb(199, 193, 193);
                      }
                  }
              }
          }
      }
  }
  .curericulums-box-us-jingpin{
     .title{
          width:100%;
          margin:0 auto ;
          margin-top: 1rem;
          margin-bottom:1rem;
          text-align: center;
          .title-header{
              font-size: 0.34rem;
               color: #3aca3a;
               margin-bottom: 0.1rem;
               letter-spacing: 0.05rem;
          }
          .title-footer{
              font-size: 0.22rem;
            color: rgb(182, 175, 175);
            letter-spacing: 0.04rem;
          }
      }
      .footer{
          overflow: hidden;
          margin-bottom: 0.8rem;
          .footer-left{
              width:50%;
              float: left;
              height: 2.4rem;
              .footer-left-img{
                  width:60%;
                  height: 100%;
                  margin:0 auto; 
                //   background: red;
                img{
                    width: 100%;
                    height: 100%;
                }
              }
          }
          .footer-right{
              width: 50%;
              float:right;
              .footer-right-content{
                  letter-spacing: 0.02rem;
                  .footer-right-content-header{
                      font-size: 0.22rem;
                     margin-bottom: 0.1rem;
                  }
                   .footer-right-content-text{
                       color: rgb(185, 182, 182);
                      font-size: 0.18rem;
                      margin-bottom: 0.1rem;
                  }
                    .footer-right-content-renqun{
                      font-size: 0.18rem;
                       margin-bottom: 0.1rem;
                      span{
                            margin-left: 0.02rem;
                           font-size: 0.16rem;
                            color: rgb(185, 182, 182);
                      }
                  }
                      .footer-right-content-xueshi{
                      font-size: 0.18rem;
                        margin-bottom: 0.1rem;
                      span{
                            margin-left: 0.02rem;
                           font-size: 0.16rem;
                         color: rgb(185, 182, 182);
                      }
                  }
                      .footer-right-content-money{
                      font-size: 0.18rem;
                        margin-bottom: 0.1rem;
                      span{
                          margin-left: 0.02rem;
                           font-size: 0.16rem;
                          color: red;
                      }
                  }
                         .footer-right-content-btn{
                             width:1.4rem;
                             line-height: 0.3rem;
                             background: #3aca3a;
                      font-size: 0.18rem;
                      color: beige;
                      text-align: center;
                      cursor: pointer;
                  }

              }
          }
      }
  }
}
</style>
