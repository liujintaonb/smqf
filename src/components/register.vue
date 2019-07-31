<template>
<div class="register-box-box" id="register">
<div class="login-box" id="loginBox">
 <div class="login-box-content">
    <div class="login-box-rigth">
      <div class="title">
          注册
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
             <FormItem prop="phone" id="phoneCode">
            <Input  type="text" v-model.trim="formInline.phone" placeholder="手机号">
                <Icon size="30" type="ios-call-outline" slot="prepend"></Icon>
                 <span slot="append" class="getPhoneVode" @click="getPhoneVode('formInline')">{{phoneCode}}</span>
            </Input>
        </FormItem>
               <FormItem prop="phoneCode">
            <Input  type="text" v-model.trim="formInline.phoneCode" placeholder="验证码">
                <!-- <Icon size="30" type="ios-call-outline" slot="prepend"></Icon> -->
                 <!-- <span slot="append">获取验证码</span> -->
            </Input>
        </FormItem>
        <FormItem>
            <Button   type="success" @click="handleSubmit('formInline')">注册</Button>
            <Button @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
    </div>
    <div class="login-box-left">
        <div class="title">已有账户?</div>
        <div class="text">已经注册过了?</div>
        <div class="text">点击下方按钮,快去登陆吧!!!</div>
        <div class="denglu" @click="goLogin">登陆</div>
    </div>
</div>
</div>
<maskLogin :childUserName="parUserName" v-show="maskLogin"></maskLogin>
<img class="register-imgback" src="../img/login/login-back1.png" alt="">
</div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media screen and (min-width:200px) and(max-width:1200px){
    .register-box-box{
        .login-box{
            top: 50% !important;
          .login-box-left{
              width: 44% !important;
          }
        }
    }
}
@media screen and (min-width:750px) and(max-width:769px){
    .register-box-box{
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
    .register-box-box{
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
    .register-box-box{
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
    .register-box-box{
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





.register-box-box{
.getPhoneVode{
   cursor: pointer;
}
    // padding: 1rem 0;
    // background: rgb(131, 129, 129);
    overflow: hidden;
    .register-imgback{
          width:100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
.login-box{
    // margin:1rem 0.5rem;
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
      .login-box-rigth{
        position: absolute;;
        padding:0.6rem 0.3rem 0.3rem 0.3rem;
        width: 30%;
        background: rgb(250, 250, 246);
        top: -4%;
        right:0.6rem;
        .title{
            font-size: 0.24rem;
            color: green;
            margin-bottom: 0.6rem;
        }
      }
       .login-footer{
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
      .login-box-left{
          position: absolute;
          top:30%;
          left:20%;
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
          .denglu{
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
<script src="../js/register.js">

</script>
