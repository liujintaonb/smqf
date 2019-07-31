
import smfooter from '../components/smfooter'
import videocom from '../video/videocom';
export default {
    name: 'curriculums',
    components:{smfooter,videocom},
    data () {
      return {
        videoShow:false,
        currVideoArr:[
          {kecheng:"英语夏令营",money:"3000元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"小学英语",money:"3500元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"初中词语",money:"3200元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"初中语法",money:"3100元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"中考题分",money:"3200元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"高中词汇",money:"3000元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"高中语法",money:"3000元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"托福、雅思词汇",money:"3000元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"托福、雅思阅读",money:"3000元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
          {kecheng:"水木清芬教育教材、学习光盘",money:"3000元",imgSrc:require("../img/curriculumsImg/curriculumsImg-jingpin1.png")},
      ]
      }
    },
    mounted() {
      document.documentElement.scrollTop=0;
    },
    methods: {
      //试听视频按钮带索引
      getVideo(index){
        this.$refs.showVideo.showed()
      },
      home(){
        this.$router.push("/")
    },
    aboutus(){
      this.$router.push("/aboutus")
  },
  elegantdisplay(){
    this.$router.push("/elegantdisplay")
},
xialingying(){
  this.$router.push("/xialingying")
},
famousteacher(){
  this.$router.push("/famousteacher")
}
    },
  }