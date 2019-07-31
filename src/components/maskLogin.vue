<template>
  <div class="mask-box" v-show="maskBox" id="maskBox">
    <div class="mask-box-mask"></div>
    <div class="mask-content">

     <div class="gatheringinfo-box" v-show="getinfo">
       <div class="gatheringinfo-footer">
         <div class="gatheringinfo-footer-content">
             <div class="gatheringinfo-content-whilt">
                 <div class="title">
                     您注册水木清芬的目的？
                 </div>
                 <div class="left">
                     <img src="../img/gatheringinformation/gatheringinformation-mudi1.png" alt="">
                     <div class="on div-btn" @click="helpChild">孩子学习英语</div>
                 </div>
                 <div class="right">
                    <img src="../img/gatheringinformation/gatheringinformation-mudi2.png" alt="">
                     <div class="div-btn" @click="helpZiji">自我学习英语</div>
                 </div>
             </div>
         </div>
       </div>
     </div>


     <div class="gatheringinfo1-box" v-show="getinfo1">
       <div class="gatheringinfo1-footer">
         <div class="gatheringinfo1-footer-content">
             <div class="gatheringinfo1-content-whilt">
                 <div class="title">
                     请填写您详细信息，以便我们提供合适您英语水平的课程
                 </div>
                  <div class="text-box" v-for="(item,index) in textBoxArr">
                        <div class="text-box-title">
                            {{item.title}}
                        </div>
                        <div class="text-box-footer">
                            <div   @click="getOn(childItem,childIndex)"  v-for="(childItem,childIndex) in item.textArr" :class="{'on':childItem.showOn===true,'lenght':childItem.islength===1}">
                                {{childItem.text}}
                            </div>
                        </div>
                  </div>
             </div>
             <div class="gatheringinfo1-content-whilt-next">
                 <div @click="goPre">返回上一页</div>
                   <div @click="finsh">完成</div>
             </div>
         </div>
     </div>

</div>

    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*最大屏幕分辨率为1280px*/
@media screen and (max-width:1280px){
  .mask-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index:1000;
  width: 100%;
  height: 100%;
  .mask-box-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(230, 226, 226, 0.2);
  }
  .mask-content {
    width:80%;
    height:80%;
    margin:0 auto;
    transform: translate(0,12%);
    background: red;
  }
}

.gatheringinfo-box{
         width: 100%;
        height: 100%;
  .gatheringinfo-footer{
           width: 100%;
        height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo-footer-content{
        width: 100%;
        height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height: 100%;
//  height:calc(auto + 2px);
     .title{
         width:100%;
         text-align: center;
         font-size: 0.28rem;
         margin:0.7rem 0; 
     }
     .on{
         background: #3aca3a  !important;
         color: white  !important;
              border:none !important;
            //    line-height:0.46rem;
     }
     .left{
         width:40%;
        //  height: 2rem;
        margin-right:20%; 
        float: left;
         img{
             float:right;
             width:100%;
             height:2.4rem;
         }
         div{
                 float:right;
               width:2.6rem;
             line-height:0.4rem;
             font-size: 0.18rem;
                text-align: center;
                // background: green;
                border-radius:0.3rem; 
                     border: 2px solid #9b9b9b;
                     cursor: pointer;
                     margin-right: 0.3rem;
         }

     }
     .div-btn:hover{
background:#3aca3a !important;
         color: white  !important;
              border:none !important;
     }
       .right{
         width:40%;
         float:left;
             img{
                     float:left;
            width:100%;
             height:2.4rem;
         }
         div{
             box-sizing: border-box;
                 float:left;
            width:2.6rem;
             line-height:0.4rem;
                 font-size: 0.18rem;
                 text-align: center;
                //  background: green;
                     border-radius:0.3rem; 
                       border: 2px solid #9b9b9b;
                          cursor: pointer;
                            margin-left: 0.3rem;                     
         }
     }
    }
    }
   
  }
}



.gatheringinfo1-box{
 width: 100%;
 height: 100%;
  .gatheringinfo1-footer{
     width: 100%;
 height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo1-footer-content{
        width: 100%;
 height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo1-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height:90%;
     .title{
         font-size: 0.26rem;
         text-align: center;
         color: rgb(114, 110, 110);
         margin:0.3rem 0; 
     }
     .text-box{
         margin:0 auto;
         padding:0 1.5rem;
         .text-box-title{
             text-align: center;
             color: #3aca3a;
             font-size: 0.18rem;
             margin: 0.1rem 0;
         }
         .text-box-footer{
             overflow: hidden;
            //  text-align: center;
             .on{
                 color: white;
                 background:#3aca3a;
                 border-color: #3aca3a;
             }
             div{
                //  width: 1.4rem;
                width:1.5rem;
                display:inline-block;
                line-height:0.3rem;
                border: 2px solid #979797;
                font-size: 0.14rem;
                border-radius: 0.1rem;
                text-align: center;
                margin:0.06rem 0.4rem; 
                   cursor: pointer;
             }
            //  .lenght{
            //        padding: 0 0.56rem !important;
            //       //  margin-left: 0.63rem !important;
            //        margin: 0 0 0 0.6rem !important;
            //  }
            //  div:hover{
            //          color: white;
            //      background: green;
            //      border:none;
            //  }
         }
     }
       }
    }
    .gatheringinfo1-content-whilt-next{
        width:4.8rem;
        margin:0.3rem auto;
        overflow: hidden;
        div{
          width: 1.5rem;
          display:inline-block;
          // margin-right: 0.6rem;
          margin:  0 0.4rem;
          line-height: 0.3rem;
          border: 2px solid #979797;
          font-size: 0.16rem;
          text-align:center;
          cursor: pointer;
        }
    }
  }
 }

}
/*最小屏幕分辨率为1280px且最大为1440px*/
@media (min-width: 1280px) and (max-width:1440px){
   .mask-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index:1000;
  width: 100%;
  height: 100%;
  .mask-box-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(230, 226, 226, 0.2);
  }
  .mask-content {
    width:80%;
    height:80%;
    margin:0 auto;
    transform: translate(0,12%);
    background: red;
  }
}

.gatheringinfo-box{
         width: 100%;
        height: 100%;
  .gatheringinfo-footer{
           width: 100%;
        height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo-footer-content{
        width: 100%;
        height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height: 100%;
//  height:calc(auto + 2px);
     .title{
         width:100%;
         text-align: center;
         font-size: 0.28rem;
         margin:0.7rem 0; 
     }
     .on{
         background: #3aca3a  !important;
         color: white  !important;
              border:none !important;
            //    line-height:0.46rem;
     }
     .left{
         width:40%;
        //  height: 2rem;
        margin-right:20%; 
        float: left;
         img{
             float:right;
             width:100%;
             height:3rem;
         }
         div{
                 float:right;
               width:3rem;
             line-height:0.4rem;
             font-size: 0.18rem;
                text-align: center;
                // background: green;
                border-radius:0.3rem; 
                     border: 2px solid #9b9b9b;
                     cursor: pointer;
                     margin-right: 0.5rem;
         }

     }
     .div-btn:hover{
background:#3aca3a !important;
         color: white  !important;
              border:none !important;
     }
       .right{
         width:40%;
         float:left;
             img{
                     float:left;
            width:100%;
             height:3rem;
         }
         div{
             box-sizing: border-box;
                 float:left;
            width:3rem;
             line-height:0.4rem;
                 font-size: 0.18rem;
                 text-align: center;
                //  background: green;
                     border-radius:0.3rem; 
                       border: 2px solid #9b9b9b;
                          cursor: pointer;
                            margin-left: 0.7rem;                     
         }
     }
    }
    }
   
  }
}



.gatheringinfo1-box{
 width: 100%;
 height: 100%;
  .gatheringinfo1-footer{
     width: 100%;
 height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo1-footer-content{
        width: 100%;
 height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo1-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height:90%;
     .title{
         font-size: 0.26rem;
         text-align: center;
         color: rgb(114, 110, 110);
         margin:0.3rem 0; 
     }
     .text-box{
         margin:0 auto;
         padding:0 1.5rem;
         .text-box-title{
             text-align: center;
             color: #3aca3a;
             font-size: 0.18rem;
             margin: 0.1rem 0;
         }
         .text-box-footer{
             overflow: hidden;
            //  text-align: center;
             .on{
                 color: white;
                 background:#3aca3a;
                 border-color: #3aca3a;
             }
             div{
                //  width: 1.4rem;
                width:1.8rem;
                display:inline-block;
                line-height:0.3rem;
                border: 2px solid #979797;
                font-size: 0.14rem;
                border-radius: 0.1rem;
                text-align: center;
                margin:0.06rem 0.9rem; 
                   cursor: pointer;
             }
            //  .lenght{
            //        padding: 0 0.56rem !important;
            //       //  margin-left: 0.63rem !important;
            //        margin: 0 0 0 0.6rem !important;
            //  }
            //  div:hover{
            //          color: white;
            //      background: green;
            //      border:none;
            //  }
         }
     }
       }
    }
    .gatheringinfo1-content-whilt-next{
        width:7.6rem;
        margin:0.3rem auto;
        overflow: hidden;
        div{
          width: 1.8rem;
          display:inline-block;
          // margin-right: 0.6rem;
          margin:  0 0.9rem;
          line-height: 0.3rem;
          border: 2px solid #979797;
          font-size: 0.16rem;
          text-align:center;
          cursor: pointer;
        }
    }
  }
 }


}
/*最小屏幕分辨率为1440px且最大为1680px*/
@media (min-width: 1440px) and (max-width:1680px){

.mask-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index:1000;
  width: 100%;
  height: 100%;
  .mask-box-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(230, 226, 226, 0.2);
  }
  .mask-content {
    width:80%;
    height:80%;
    margin:0 auto;
    transform: translate(0,12%);
    background: red;
  }
}

.gatheringinfo-box{
         width: 100%;
        height: 100%;
  .gatheringinfo-footer{
           width: 100%;
        height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo-footer-content{
        width: 100%;
        height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height: 100%;
//  height:calc(auto + 2px);
     .title{
         width:100%;
         text-align: center;
         font-size: 0.28rem;
         margin:0.7rem 0; 
     }
     .on{
         background: #3aca3a  !important;
         color: white  !important;
              border:none !important;
            //    line-height:0.46rem;
     }
     .left{
         width:40%;
        //  height: 2rem;
        margin-right:20%; 
        float: left;
         img{
             float:right;
             width:4.14rem;
             height:4.14rem;
         }
         div{
                 float:right;
               width:3rem;
             line-height:0.5rem;
             font-size: 0.18rem;
                text-align: center;
                // background: green;
                border-radius:0.3rem; 
                     border: 2px solid #9b9b9b;
                     cursor: pointer;
                     margin-right: 0.6rem;
         }

     }
     .div-btn:hover{
background:#3aca3a !important;
         color: white  !important;
              border:none !important;
     }
       .right{
         width:40%;
         float:left;
             img{
                     float:left;
               width:4.14rem;
             height:4.14rem;
         }
         div{
             box-sizing: border-box;
                 float:left;
            width:3rem;
             line-height:0.5rem;
                 font-size: 0.18rem;
                 text-align: center;
                //  background: green;
                     border-radius:0.3rem; 
                       border: 2px solid #9b9b9b;
                          cursor: pointer;
                            margin-left: 0.6rem;                     
         }
     }
    }
    }
   
  }
}



.gatheringinfo1-box{
 width: 100%;
 height: 100%;
  .gatheringinfo1-footer{
     width: 100%;
 height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo1-footer-content{
        width: 100%;
 height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo1-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height:90%;
     .title{
         font-size: 0.26rem;
         text-align: center;
         color: rgb(114, 110, 110);
         margin:0.3rem 0; 
     }
     .text-box{
         margin:0 auto;
         padding:0 1.5rem;
         .text-box-title{
             text-align: center;
             color: #3aca3a;
             font-size: 0.18rem;
             margin: 0.2rem 0;
         }
         .text-box-footer{
             overflow: hidden;
             text-align: center;
             .on{
                 color: white;
                 background:#3aca3a;
                 border-color: #3aca3a;
             }
             div{
                 width:2.6rem;
                display:inline-block;
                 line-height:0.4rem;
                   border: 2px solid #979797;
                   font-size: 0.16rem;
                   border-radius: 0.1rem;
                   text-align: center;
                  //  float: left;
                   margin:0.05rem 0.7rem; 
                   padding:0 0.4rem ;
                   cursor: pointer;
             }
            //  .lenght{
            //        padding: 0 0.56rem !important;
            //       //  margin-left: 0.63rem !important;
            //        margin: 0 0 0 0.6rem !important;
            //  }
            //  div:hover{
            //          color: white;
            //      background: green;
            //      border:none;
            //  }
         }
     }
       }
    }
    .gatheringinfo1-content-whilt-next{
        width:8.12rem;
        margin:0.3rem auto;
        overflow: hidden;
        div{
          width:2.6rem;
          display:inline-block;
          margin:0 0.7rem;
            // margin: 0 1rem;
            // margin-left:1rem; 
            // float: left;
            // width: 1.5rem;
             line-height: 0.4rem;
              border: 2px solid #979797;
              font-size: 0.16rem;
              text-align:center;
              cursor: pointer;
              // padding: 0 0.4rem;
        }

    }
  }
 }
}
/*最小屏幕分辨率为1920px*/
@media screen and (min-width:1920px){
  .mask-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index:1000;
  width: 100%;
  height: 100%;
  .mask-box-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(230, 226, 226, 0.2);
  }
  .mask-content {
    width:80%;
    height:80%;
    margin:0 auto;
    transform: translate(0,12%);
    background: red;
  }
}

.gatheringinfo-box{
         width: 100%;
        height: 100%;
  .gatheringinfo-footer{
           width: 100%;
        height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo-footer-content{
        width: 100%;
        height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height: 100%;
//  height:calc(auto + 2px);
     .title{
         width:100%;
         text-align: center;
         font-size: 0.28rem;
         margin:0.7rem 0; 
     }
     .on{
         background: #3aca3a  !important;
         color: white  !important;
              border:none !important;
            //    line-height:0.46rem;
     }
     .left{
         width:40%;
        //  height: 2rem;
        margin-right:20%; 
        float: left;
         img{
             float:right;
             width:4.14rem;
             height:4.14rem;
         }
         div{
                 float:right;
               width:3rem;
             line-height:0.5rem;
             font-size: 0.18rem;
                text-align: center;
                // background: green;
                border-radius:0.3rem; 
                     border: 2px solid #9b9b9b;
                     cursor: pointer;
                     margin-right: 0.6rem;
         }

     }
     .div-btn:hover{
background:#3aca3a !important;
         color: white  !important;
              border:none !important;
     }
       .right{
         width:40%;
         float:left;
             img{
                     float:left;
               width:4.14rem;
             height:4.14rem;
         }
         div{
             box-sizing: border-box;
                 float:left;
            width:3rem;
             line-height:0.5rem;
                 font-size: 0.18rem;
                 text-align: center;
                //  background: green;
                     border-radius:0.3rem; 
                       border: 2px solid #9b9b9b;
                          cursor: pointer;
                            margin-left: 0.6rem;                     
         }
     }
    }
    }
   
  }
}



.gatheringinfo1-box{
 width: 100%;
 height: 100%;
  .gatheringinfo1-footer{
     width: 100%;
 height: 100%;
    background: rgba(3,2,2,0.2);
    .gatheringinfo1-footer-content{
        width: 100%;
 height: 100%;
        // height: 6rem;
        margin:0 auto ;
    background: #eae8ea;
    padding:0.2rem;
      border-radius:0.08rem ;
     .gatheringinfo1-content-whilt{
    overflow: hidden;
     background: white;   
     border-radius:0.08rem ;
     padding-bottom: 0.7rem;
     height:90%;
     .title{
         font-size: 0.26rem;
         text-align: center;
         color: rgb(114, 110, 110);
         margin:0.7rem 0; 
     }
     .text-box{
         margin:0 auto;
         padding:0 1.5rem;
         .text-box-title{
             text-align: center;
             color: #3aca3a;
             font-size: 0.18rem;
             margin: 0.2rem 0;
         }
         .text-box-footer{
             overflow: hidden;
             text-align: center;
             .on{
                 color: white;
                 background:#3aca3a;
                 border-color: #3aca3a;
             }
             div{
                //  width: 1.4rem;
                display:inline-block;
                 line-height:0.4rem;
                   border: 2px solid #979797;
                   font-size: 0.16rem;
                   border-radius: 0.1rem;
                   text-align: center;
                  //  float: left;
                   margin:0.05rem 0.3rem; 
                   padding:0 0.4rem ;
                   cursor: pointer;
             }
             .lenght{
                   padding: 0 0.56rem !important;
                  //  margin-left: 0.63rem !important;
                   margin: 0 0 0 0.6rem !important;
             }
            //  div:hover{
            //          color: white;
            //      background: green;
            //      border:none;
            //  }
         }
     }
       }
    }
    .gatheringinfo1-content-whilt-next{
        width:4rem;
        margin:0.3rem auto;
        overflow: hidden;
        div{
          display:inline-block;
            margin-right:0.5rem;
            // float: left;
            // width: 1.5rem;
            line-height: 0.4rem;
              border: 2px solid #979797;
              font-size: 0.16rem;
              text-align:center;
              cursor: pointer;
              padding: 0 0.4rem;
        }

    }
  }
 }
}
</style>

<script>
import ajax from 'ajax'
export default {
    name: 'maskLogin',
  //  props:"someprops",
  props:["childUserName"],
   data(){
        return{
          current:1000,
          maskBox:true,
          getinfo:true,
          getinfo1:false,
           textBoxArr:[
             {title:"您的职业",textArr:[{text:"上班族",showOn:true,parIndex:0,islength:0},{text:"大学生",showOn:false,parIndex:0,islength:0}]},
            {title:"学习目的",textArr:[{text:"综合英语能力提升",showOn:true,parIndex:1,islength:0},{text:"商务职场",showOn:false,parIndex:1,islength:0},{text:"在职面试",showOn:false,parIndex:1,islength:0},{text:"出国旅行",showOn:false,parIndex:1,islength:0},{text:"托福",showOn:false,parIndex:1,islength:1},{text:"雅思",showOn:false,parIndex:1,islength:1}]},
              {title:"英语水平",textArr:[{text:"没听过英语",showOn:true,parIndex:2,islength:0},{text:"会说简单",showOn:false,parIndex:2,islength:0},{text:"能说完整句子",showOn:false,parIndex:2,islength:0},{text:"能流利交流",showOn:false,parIndex:2,islength:0}]},
           ]
        }
   },

   methods:{
     //点击变色
     getOn(childItem,childIndex){
       const arr=this.textBoxArr[childItem.parIndex].textArr
       for(const x of arr){
          x.showOn=false
       }
       childItem.showOn=true;
     },
     helpChild(){
       this.getinfo=false;
       this.getinfo1=true
     },
     
       helpZiji(){
       this.getinfo=false;
       this.getinfo1=true
     },
     goPre(){
       this.getinfo=true;
          this.getinfo1=false;
     },
     finsh(){
           console.log(77777,this.childUserName);
       let c= document.getElementsByClassName("on");
       console.log()
             ajax.post(
        "http://www.smqfedu.cn/smqfedu/user/getuserinfo",
        {           
           userName:this.childUserName,
           registerpurpose:c[0].innerHTML.trim(),
           occupation:c[1].innerHTML.trim(),
           studypurpose:c[2].innerHTML.trim(),
           enlishlevel:c[3].innerHTML.trim()
        },(res)=>{
          if(res&&res.info==="success"){
                   this.$Message.success("注册成功");
                   console.log(this.childUserName)
                  window.localStorage.setItem("userName",this.childUserName);
                  this.$router.push("/");
          }  
        },(err=>{
          console.log("err",err)
        })
        // ,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      )
     }
   },
    mounted() {
        console.log(66);

    //   document.getElementById("maskBox").style.height=window.innerHeight+"px";
    },
  }
</script>
