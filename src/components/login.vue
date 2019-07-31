<template>
<div class="login-box-box" id="login">
<div class="login-box">
<div class="login-box-content">
    <div class="login-box-left">
      <div class="title">
          登录
      </div>
       <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user" style="height:40px">
            <Input type="text" v-model.trim="formInline.user" placeholder="用户名">
                <Icon  type="ios-person-outline" size="30" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input  type="password" v-model.trim="formInline.password" placeholder="密码">
                <Icon size="30" type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
             <FormItem prop="valcode">
            <Input  type="text" v-model.trim="formInline.valcode" placeholder="验证码">
                <Icon size="30" type="md-star-half" slot="prepend"></Icon>
                     <span slot="append" @click="changeCode">
                          <img :src="formInline.codeUrl" style="width:84px;" alt="">
                     </span>
            </Input>
        </FormItem>
        <FormItem>
            <Button   type="success" @click="handleSubmit('formInline')">登陆</Button>
            <Button @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
       <!-- <img @click="changeImg" v-bind:src="valiDateimg" alt=""> -->
       <!-- <div v-bind:src="http://39.105.80.61:8080/first/user/validateCode"></div> -->
      <div class="login-footer">
         <div class="login-footer-psd" @click="changePassword">忘记密码?</div>
      </div>
    </div>
    <div class="login-box-rigth">
        <div class="title">没有账户?</div>
        <div class="text">还没有注册水木清芬?</div>
        <div class="text">点击下方按钮,快来注册!!!</div>
        <div class="zhuce" @click="goRegister">注册</div>
         <!-- <el-button>Button</el-button> -->
    </div>
</div>
</div>
<img class="register-imgback" src="../img/login/login-back1.png" alt="">
</div>
<!-- <div v-text="msg"></div> -->
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media screen and (min-width:200px) and(max-width:1200px){
    .login-box-box{
        .login-box{
            top: 50% !important;
          .login-box-left{
              width: 44% !important;
          }
        }
    }
}
@media screen and (min-width:750px) and(max-width:769px){
    .login-box-box{
        .login-box{
            top: 50% !important;
          .login-box-left{
              width: 44% !important;
          }
          .login-box-rigth{
              right: 10% !important;
          }
        }
    }
}

@media screen and (min-width:350px) and(max-width:376px){
    .login-box-box{
        .ivu-input-group-append{
            img{
                width: 0.5rem !important;
            }
        }
        .ivu-icon{
            font-size: 0.2rem !important;
        }
        .login-box{
            top: 50% !important;
            .ivu-form-item-content{
                button{
                    margin: 0 !important;
                }
            }
          .login-box-left{
              width: 50% !important;
              left: 0 !important;
          }
          .login-box-rigth{
              right: 0% !important;
          }
        }
    }
}


@media screen and (min-width:413px) and(max-width:414px){
    .login-box-box{
        .ivu-input-group-append{
            img{
                width: 0.5rem !important;
            }
        }
        .ivu-icon{
            font-size: 0.2rem !important;
        }
        .login-box{
            top: 50% !important;
            .ivu-form-item-content{
                button{
                    margin: 0 !important;
                }
            }
          .login-box-left{
              width: 50% !important;
              left: 0 !important;
          }
          .login-box-rigth{
              right: 0% !important;
          }
        }
    }
}

@media screen and (min-width:200px) and(max-width:321px){
    .login-box-box{
        .ivu-input-group-append{
            img{
                width: 0.5rem !important;
            }
        }
        .ivu-icon{
            font-size: 0.2rem !important;
        }
        .login-box{
            top: 50% !important;
            .ivu-form-item-content{
                button{
                    margin: 0 !important;
                }
            }
          .login-box-left{
              width: 50% !important;
              left: 0 !important;
          }
          .login-box-rigth{
              right: 0% !important;
          }
        }
    }
}






.login-box-box{
    padding: 1rem 0;
    // background;
    // background: rgb(189, 185, 185);
    // background: url("../img/login/login-back1.png");
   .register-imgback{
       width:100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    };
.login-box{
           position: relative;
    top: 50%;
    transform: translate(0,-2rem);
    .login-box-content{
        // padding:1rem 0;
        width:80%;
        height:4rem;
        background: rgba(10, 150, 10, 0.6);
        margin:0 auto;
        position: relative;
      .login-box-left{
          overflow: hidden;
          .login-input-box{
              overflow: hidden;
          .login-input{
              display:block;
             border: none;
             border-bottom:1px solid rgb(221, 217, 217);
             outline: none;
             cursor: pointer;
             padding-bottom: 0.05rem;
              width:60%;
              margin-bottom: 0.8rem;
             padding-left: 0.05rem;
             float: left;
            //   font-size: 0.16rem;
            //   border-bottom:            //   color:rgb(221, 217, 217);
            //   padding-left:0.05rem; 
          }
          .login-input-yanzheng{
              float: left;
            width:1.2rem;
            height:0.4rem;
            margin-bottom: 0.08rem;
              img{
                  display: block;
                  width:100%;
                  height:100%;
              }
          }
          }
        position: absolute;;
        padding:0.6rem 0.3rem 0.3rem 0.3rem;
        width: 30%;
        background: rgb(250, 250, 246);
        top: -8%;
        left: 0.6rem;
        .title{
            font-size: 0.24rem;
            color: green;
            margin-bottom: 0.6rem;
        }
      }
       .login-footer{
           overflow: hidden;
          .login-footer-psd{
              font-size: 0.16rem;
              float: left;
              cursor: pointer;
              color:rgb(201, 197, 197);
          }
          .login-footer-login-btn{
              font-size: 0.16rem;
              float:right;
              cursor: pointer;
              background: green;
              line-height: 0.26rem;
              width:0.8rem;
              text-align: center;
              border-radius: 0.1rem;
              color: beige;
          }
      }
      .login-box-rigth{
          position: absolute;
          top:30%;
          right:20%;
          color: beige;
          .title{
              font-size: 0.18rem;
              margin-bottom: 0.1rem;
                letter-spacing:0.02rem;
          }
          .text{
              font-size: 0.16rem;
              letter-spacing:0.02rem;
              margin-bottom: 0.04rem;
          }
          .zhuce{
              width:1rem;
              margin-top: 0.2rem;
              border:2px solid green;
              line-height: 0.26rem;
              font-size: 0.18rem;
              text-align: center;
              cursor: pointer;
              border-radius:0.1rem; 
          }
      }
    }
}
}
</style>
<script src="../js/login.js">

</script>
