
import smfooter from '../components/smfooter'
export default {
    name: 'elegantdisplay',
    components:{smfooter},
    data () {
      return {
        xueyuananliArr:[
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student1.png"),name:"王卓璇高中）",work:"学校：内蒙古海拉尔二中参加培训前：英语110分左右。参加培训中：积极主动，善于思考，灵活运用各种学习方法。参加培训后：英语提升明显，月考138分，成绩提升28分。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student2.png"),name:"唐成搏（高中）",work:"学校：石家庄精英中学参加培训前：英语成绩处于班级中上，不够稳定。参加培训中：善于思考，积极配合，思维导图学习工具运用得很好。参加培训后：成绩提升明显，月考均在130分以上，有一次英语成绩班上第一。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student3.png"),name:"金哲名（高中）",work:"学校：河北衡水第十四中学参加培训前：英语班级中下等。参加培训中：勤奋刻苦，聪明伶俐，善于提问，善于总结。参加培训后：主动竞选英语课代表，成绩稳步前进，英语成绩从班级前10名，稳步到前5名，再稳定到前3名。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student4.png"),name:"杨森钧（高中体育生）",work:"学校：湖南湖天中学（高中）参加培训前：英语50分左右。参加培训中：基础虽差，但不抛弃，不放弃，坚定信念，高质量完成任务，进步明显。参加培训后：模拟考试先后从60分，提升到80分，稳定到90分，最高分数能达到106分。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student5.png"),name:"余佳凝（高中）",work:"学校：河北冀州中学（高中）参加培训前：英语70分左右。参加培训中：以惊人的勤奋和好问精神，高质量完成所有学习任务，取得巨大突破。参加培训后：成绩稳步提升，高二稳定在105-115分之间。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student6.png"),name:"杜依依（高中）",work:"学校：河北大城一中参加培训前：基本中上，但学习很吃力。参加培训中：通过思维导图和记忆力的综合培训，学习变得很轻松，每天洋溢着笑容。参加培训后：英语成绩从90分步步提升，稳定在115分。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student7.png"),name:"候祥祥（高中升大学）",work:"学校：新疆昌吉北京大学附属中学。参加培训前：英语词汇量非常少，从来没有及格过。参加培训中：班级最勤奋的学生，跟着我们学习了3期，整个暑假在水木清芬教育。参加培训后：英语提升明显，人大就读大学期间，积极上进，立志考牛津大学。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student8.png"),name:"杜雨溪（初中）",work:"学校：河北大城权村镇第一中学。参加培训前：英语90分左右。参加培训中：积极回答问题，认真完成作业，担任学生助教非常负责，高质量完成任务。参加培训后：英语成绩稳定110分以上，稳居班级第一，信心倍增，总成绩也班级第一，年级前三。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student9.png"),name:"李博远（高中）",work:"学校：河北石家庄二中（高中）参加培训前：英语110分左右参加培训中：灵活运用各种记忆方法，勤奋刻苦参加培训后：高考英语128分，顺利考上重本，随后来水木清芬教育担任助教，各方面表现卓越。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student10.png"),name:"辛雪莹（初中）",work:"学校：山西运城一中参加培训前：英语学习吃力，成绩中等。参加培训中：善于表演，多彩多艺，深受师生爱戴，思维导图和记忆方法掌握不错，参加《诗歌口语班》，顺利完成20首中英文诗歌，信心倍增。参加培训后：成绩稳定在班级前列，家人安排出国留学。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student11.png"),name:"曾祎腾（小学）",work:"学校：北京朝阳清华大学附属小学。参加培训前：英语徘徊于60分。参加培训中：勤奋刻苦，从不缺席，善于思考，“触目经心”单词记忆法掌握良好参加培训后：北京朝阳区小升初考试中以优秀顺利毕业。"},
          {logo:require('../img/logo/logo1.png'),imgSrc:require("../img/elegantdisplay/student12.png"),name:"董子琪（小学）",work:"学校：北京十一学校参加培训前：英语70多分，学习兴趣不浓。参加培训中：喜欢课堂的多元互动氛围，多次面对面与外语系教授交流学习后，对英语学习兴趣倍增。参加培训后：成绩稳定在90多分，六年级期末考试达到97分。"}
        ]
      }
    },
    mounted() {
      document.documentElement.scrollTop=0;
    },
    methods: {
      home(){
        this.$router.push("/")
    },
    aboutus(){
      this.$router.push("/aboutus")
  },
  curriculums(){
    this.$router.push("/curriculums")
},
famousteacher(){
  this.$router.push("/famousteacher")
},
xialingying(){
  this.$router.push("/xialingying")
},
    },
  }