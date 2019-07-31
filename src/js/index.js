
import smfooter from '../components/smfooter';
import videocom from '../video/videocom';
import asios from 'axios'
!function(n) {
  var e = n.document,
      t = e.documentElement,
      i = 750,
      d = i / 100,
      o = "orientationchange" in n ? "orientationchange": "resize",
      a = function() {
          var n = t.clientWidth || 320;
          n > 750 && (n = 750);
          t.style.fontSize = n / d + "px"
      };
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1));
} (window);
export default {
  name: 'HelloWorld',
  components:{smfooter,videocom},
  data () {
    return {
      value1: 0,
      value2: 0,
      loginBox:true,
      userNameBox:false,
      userName:"77",
      test:"张三",
      bannerImgArr:[
        {imgSrc:require("../img/banner/banner1.png")},
        {imgSrc:require("../img/banner/banner2.png")},
        {imgSrc:require("../img/banner/banner3.png")},
        {imgSrc:require("../img/banner/banner4.png")},
        // {imgSrc:require("../img/index-banner5.png")}
      ],
      zhuanjiatuanduiArr:[],
      shipinArr:[
        {title:'小学词汇',imgSrc:require("../img/index-mingshi1.png")},
        {title:'初中词汇',imgSrc:require("../img/index-mingshi2.png")},
        {title:'高中词汇',imgSrc:require("../img/index-mingshi3.png")},
        {title:'KET PET FEC词汇',imgSrc:require("../img/index-mingshi4.png")},
        {title:'托福雅思词汇',imgSrc:require("../img/index-mingshi5.png")},
        {title:'考研词汇',imgSrc:require("../img/index-mingshi5.png")},
    ]
    }
  },
  created(){
    asios({
      url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=1',
      method: 'get',
    responseType: 'json', // 默认的
  }).then((response)=> {
    let arr=new Array();
    let g=-1;
    for(let i=0;i<response.data.length;i++){
      if(i/4%1===0){
        g++
        arr[g]=new Array();
      }
      arr[g].push(response.data[i])
    }
    this.zhuanjiatuanduiArr=arr
 }).catch(function (error) {
  })
  },
  methods: {
    //注销
    deleUser(){
      this.userNameBox=false;
      this.loginBox=true;
      window.localStorage.setItem("userName","")
    },
    //视频
    getVideoShow(index){
      this.$refs.showVideo.showed()
      // this.videoShow=true
    },
    goLogin(){
        this.$router.push("/login")
    },
    goRegister(){
      this.$router.push("/register")
    },
    home(){
      this.$router.push("/")
  },
  xialingying(){
    this.$router.push("/xialingying")
  },
  aboutus(){
    this.$router.push("/aboutus")
},
curriculums(){
  this.$router.push("/curriculums")
},
elegantdisplay(){
  this.$router.push("/elegantdisplay")
},
aboutus(){
this.$router.push("/aboutus")
},
famousteacher(){
  this.$router.push("/famousteacher")
},
divBtnGoFamousteacher(){
  this.$router.push("/famousteacher")
},
divBtnGoAboutus(){
  this.$router.push("/aboutus")
  },
  },
  mounted(){
    const userName=window.localStorage.getItem("userName");
    if(userName){
      this.userNameBox=true;
      this.loginBox=false;
      this.userName=userName;
      setTimeout(()=>{
        window.localStorage.setItem("userName","")
      },600000)
    }

    document.documentElement.scrollTop=0;
// document.getElementById("bannerBox").
  },
}