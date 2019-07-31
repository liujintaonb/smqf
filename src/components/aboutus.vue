<template>
<div class="register-box">
<div class="register-box-banner-box swiper-container">
    <div class="swiper-wrapper">
  <div class="swiper-slide">  <img src="../img/banner/banner1.png" alt=""></div>
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
       <div class="Communal-box-bannerfooter-div" @click="elegantdisplay">
         学员天地
       </div>
       <div class="Communal-box-bannerfooter-div" @click="xialingying">
         夏令营
       </div>
       <div class="Communal-box-bannerfooter-div on">
         关于我们
       </div>
  </div>
 <!-- <B><mapB> -->

 </div>
 <div class="register-box-pinpai">
   <div class="title">
   <div class="title-title">品牌介绍</div> 
   <div class="title-text">ABOUT BRAND</div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div class="footer-left-img">
          <img src="../img/abouts/aboutus-pinpai1.png" alt="">
        </div>
      </div>
      <div class="footer-rigth">
        <div class="footer-rigth-text">
            北京水木清芬教育科技有限公司成立于2014年12月30日，总部设在清华大学，
            是国内专门从事学习方法研究与培训，以英语为核心开展学科辅导的综合型培训机构。
            课程体系由清华北大北师大中科院等名校专家与教研团队精心研发，主要分学生学习力培训和学科提分培训两大体系。
        </div>
      </div>
    </div>

 </div>
 <div class="register-box-time">
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
 <div class="time" style="border:none;">
  <div class="header">
    10
    <span>+</span>
  </div>
  <div class="footer">
    制定课程
  </div>
 </div>


 </div>
 
 <div class="register-box-img-content">
   <div class="register-box-img">
        <img src="../img/abouts/aboutus-pinpai2.png" alt="">
   </div>
 </div>
 <div class="register-box-lianxi-people">
    <div class="title">联系我们</div>
    <Divider />
    <div class="lianxi-split" style=" height: 3rem;">
        <Split v-model="split1">
            <div slot="left" class="lianxi-split-pane" style="padding: 10px;">
                <div class="ivu-form-item">
                    <Icon style="font-size:0.4rem;" type="ios-mail"/>
                    <span style="font-size:0.16rem; padding-left: 12px;font-weight: 900;">联系邮箱</span>
                    <div class="ivu-form-item-div" style="font-size:0.16rem; padding-left: 55px;font-weight: 900;">perciver@sina.com</div>
                </div>
                <div class="ivu-form-item">
                    <Icon style="font-size: 0.4rem;" type="ios-call" />
                    <span  style="font-size:0.16rem;padding-left: 12px;font-weight: 900;">联系方式</span>
                     <div class="ivu-form-item-div" style="font-size:0.16rem; padding-left: 55px;font-weight: 900;">400-886-2231</div>
                </div>
                <div class="ivu-form-item">
                    <Icon style="font-size:0.4rem;" type="md-pin" />
                    <span  style="font-size:0.16rem;padding-left: 12px;font-weight: 900;">联系地址</span>
                     <div class="ivu-form-item-div" style="font-size:0.16rem; padding-left: 55px;font-weight: 900;">北京市海淀区中关村东路一号院五号楼文津国际公寓1511</div>
                </div>
            </div>
            <div slot="right" class="lianxi-split-pane" style="padding: 10px;">
                 <Form ref="formItem" :model="formItem" :rules="ruleInline" :label-width="80">
                    <FormItem  prop="name"  style="font-weight:900;" label="姓名">
                        <Input v-model="formItem.name" placeholder="请输入您的姓名..."></Input>
                    </FormItem>
                    <FormItem  prop="phone"  style="font-weight:900;" label="电话">
                        <Input v-model="formItem.phone" placeholder="请输入您的电话..."></Input>
                    </FormItem>
                    <FormItem   prop="textarea" style="font-weight:900;" label="留言">
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="请留言..."></Input>
                    </FormItem>
                    <FormItem>
                       <Button   type="success" @click="handleSubmit('formItem')">提交</Button>
            <Button @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
                    </FormItem>
              </Form>
            </div>
        </Split>
    </div>
 </div>
 <div class="register-box-map">
   <div class="map">
     <testMap></testMap>
        </div>
 </div>
 <smfooter></smfooter>
</div>
<!-- <div v-text="msg"></div> -->
 
</template>
<script src="../js/aboutus.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*
iPad Pro
*/
@media screen and (min-width: 1000px) and(max-width:1025px) {
.register-box-time{
   width: 100% !important;
   .time{
     padding-right: 0.4rem !important;
     margin: 0 0.4rem !important;
   }
 }

}
/*
iPad 
*/
@media screen and (min-width: 600px) and(max-width:769px) {
.register-box-time{
   width: 100% !important;
   .time{
     padding-right: 0.18rem !important;
     margin: 0  0.2rem !important;
   }
 }
 

}
/*
  iphone678 Pulus
  */
@media screen and (min-width: 400px) and(max-width:416px) {
.register-box-time{
   width: 100% !important;
   .time{
     padding-right: 0.4rem !important;
     margin: 0 !important;
   }
 }
 .register-box-lianxi-people{
    width: 100% !important;
 }

}
  /*
  360px
  */
@media screen and (min-width:350px) and(max-width:361px){
.register-box-time{
   width: 100% !important;
   .time{
     padding-right: 0.3rem !important;
     margin: 0 !important;
   }
 }
 .register-box-lianxi-people{
    width: 100% !important;
 }


}

  /*
  iphone5 SE 320
  */
@media screen and (min-width:200px) and(max-width:321px){
.register-box-time{
   width: 100% !important;
   .time{
     padding-right: 0.16rem !important;
     margin: 0 !important;
   }
 }
 .register-box-lianxi-people{
    width: 100% !important;
    .footer{
      .right{
        .text{
          .input{
            width: 1rem !important;
          }
        }
        .text-liuyan{
          .text-input{
            width: 1rem !important;
          }
        }
      }
    }
 }
}



/*
  iphoneX 375
  */
@media screen and (min-width:370px) and(max-width:376px){
 .register-box-time{
   width: 100% !important;
   .time{
     padding-right: 0.3rem !important;
     margin: 0 !important;
   }
 }
 .register-box-lianxi-people{
    width: 100% !important;
 }
  .lianxi-split{
     height:7rem !important;
     .ivu-split-wrapper{

         .left-pane{
          //  width: 10rem !important;
           .lianxi-split-pane{
             .ivu-form-item{
                .ivu-form-item-div{
                      padding-left: 0.68rem !important;
                }
             }
           }
         }
         .right-pane{
           width: 10rem !important;
         }
       
     }
 }
}








//TOOD
.register-box{
  width: 100%;
    .register-box-banner-box {
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
  .register-box-pinpai{
    padding:1rem 0;
    .title{
      width: 3rem;
      margin:0 auto;
      .title-title{
       font-size: 0.3rem;
       color: #3aca3a;
       text-align: center;
       margin-bottom: 0.05rem;
      }
      .title-text{
        font-size: 0.22rem;
        color: #a19e9e;;
        text-align: center;
        letter-spacing: 0.04rem;
      }
    }
    .footer{
      overflow: hidden;
      width: 100%;
      margin-top: 1.3rem;
      .footer-left{
       float: left;
        // vertical-align: middle;
        width:50%;
        height:3rem;
        // margin-right:8%; 
       .footer-left-img{
         width:90%;
         height:100%;
        //  background: red;
         img{
           width: 100%;
           height: 100%;
         }
       }
      }
      .footer-rigth{
        float:right;
        width:50%;
      //  display: inline-block;
      //  vertical-align:middle;
      //  text-align: center;
      //  align-content: middle;
        .footer-rigth-text{
          width: 72%;
          font-size: 0.16rem;
          line-height:0.3rem;
          letter-spacing: 0.02rem;
          text-indent: 0.3rem;
        }
      }
    }
  }
  .register-box-time{
        // width: 12rem;
    margin: 0 auto;
    text-align: center;
    .time{
      display: inline-block;
      border-right:1px solid  rgb(172, 172, 172);
      padding:0 1.3rem;
      // margin:0 0.5rem;
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
  .register-box-img-content{
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    margin-bottom:0.6rem;
    .register-box-img{
    width:100%;
    height:100%;
    // background: red;
    img{
      width: 100%;
      height: 100%;
    }
    }
  }
  .register-box-lianxi-people{
    width:80%;
    margin:0 auto ;
    .title{
      font-size: 0.36rem;
      color: #3aca3a;
      width: 3rem;
      margin:0 auto 0.6rem;
      text-align: center;
    }
    .footer{
      overflow: hidden;
      .left{
        float: left;
         margin-top: 6%;
        .text{
          margin-bottom:0.5rem; 
          .text-lianxi{
            .text-lianxi-header{
              font-size: 0.16rem;
              color: rgb(161, 157, 157)
            }
            .text-lianxi-footer{
    font-size: 0.16rem;
              color: rgb(161, 157, 157)
            }
          }
        }
      }
      .right{
        float:right;
        .text{
          // margin-bottom: 0.3rem;
          height: 1rem;
            overflow: hidden;
          .text-name{
            display: inline;
            vertical-align: middle;
            font-size: 0.18rem;
          }
          .input{
             vertical-align: middle;
            display: inline;
             width: 3rem;
             height: 0.2rem;
             padding-left: 0.1rem;
             outline: none;
          }
         
        }
        .text-liuyan{
       .text-input{
                  display: inline;
                   vertical-align: middle;
                   width: 3rem;
             height: 0.5rem;
             padding-left: 0.1rem;
                // outline: none;
          }
             .text-name{
            display: inline;
            vertical-align: middle;
            font-size: 0.18rem;
          }
        }
        .text-btn{
          margin-top: 0.3rem;
          margin-left:17%; 
          text-align: center;
          line-height:0.3rem;
          width: 2rem;
          color: beige;
          background: #3aca3a;
          font-size: 0.18rem;
          cursor: pointer;
        }
      }
    }
  }
  .register-box-map{
    width: 80%;
    height: 5rem;
    margin: 1rem auto;
    .map{
      width: 100%;
      height: 100%;
      // background: red
    }
  }
}


</style>
