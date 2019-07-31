<template>
  <div class="icp-box">
    <div class="icp">
      <div class="left">
        <img src="../img/logo/logo1.png">
      </div>
      <div class="right">
        <div class="row">©&nbsp;北京水木清芬教育科技有限公司&nbsp;&nbsp;版权所有</div>
        <div class="row" >公司地址：北京市海淀区中关村东路一号院五号楼文津国际公寓1511</div>
        <div class="row">全国服务热线：400-000-0000 &nbsp; &nbsp; E-mail：perciver@sina.com</div>
        <div class="row">京ICP备19007391号</div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.icp-box {
      background: #000000;
       position: relative;
       padding:0.3rem 0;
       height:1.4rem;
       box-sizing:none;
  .icp {
     position:absolute;
     left:50%;
     transform: translateX(-50%);
    .left {
      display: inline-block;
      margin-right: 0.3rem;
      img {
       
      }

    }
    .right {
      display:inline-block;
      text-align: center;
      color: hsla(0, 0%, 100%, 0.7);
      // margin-top: 65px;
      font-size: 12px;
      // padding: 0.2rem;
      p {
        font-size: 0.18rem;
      }
    }
  }
}
</style>