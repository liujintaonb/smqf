import smfooter from '../components/smfooter'
import asios from 'axios'
export default {
  name: "famousteacher",
  components:{smfooter},
  data() {
    return {
      value1:0,
      value2:0,
      value3:0,
      value4:0,
      value5:0,
      value6:0,
      value7:0,
      chuangyedaoshi:[],
      jiaoyantuandui:[],
      tejijiaoshituandui:[],
      beijingmingshituandui:[],
      beijingzhuanjiatuandui:[],
      womendewaijiao:[],
      qinghuabeidazhuangyuantuandui:[],
      // womendewaijiao: [
      //   { work:"北京名师",name:"Milo老师",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-mingshituandui4.png')},
      //   { work:"北京名师",name:"Brendan老师",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-mingshituandui5.png')},
      //   { work:"北京名师",name:"Alfred老师",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-mingshituandui6.png')},
      //   { work:"北京名师",name:"Alfred老师",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-mingshituandui6.png')}
      // ],
      // qinghuabeidazhuangyuantuandui: [
      //   { work:"清华大学",name:"刘建",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-zhuangyuan1.png')},
      //   { work:"北京大学",name:"张哲鹏",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-zhuangyuan2.png')},
      //   { work:"中国科学院",name:"余冲",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-zhuangyuan3.png')},
      //   { work:"中国科学院",name:"余冲",logo:require('../img/logo/logo1.png'), imgUrl:require('../img/famousteacher/famousteacher-zhuangyuan3.png')}
      // ]
    };
  },
  created(){
          //1
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
          
          this.beijingzhuanjiatuandui=arr
       }).catch(function (error) {
        })
              //2
              asios({
                url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=2',
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
              
              this.chuangyedaoshi=arr
           }).catch(function (error) {
            })
           //3
           asios({
            url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=3',
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
          
          this.jiaoyantuandui=arr
       }).catch(function (error) {
        })
        //4
        asios({
          url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=4',
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
        this.tejijiaoshituandui=arr
        
     }).catch(function (error) {
      })
    //5
    asios({
      url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=5',
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
    this.beijingmingshituandui=arr
    
 }).catch(function (error) {
  })

     //6
     asios({
      url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=6',
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
    
    this.womendewaijiao=arr
 }).catch(function (error) {
  })
      //7
      asios({
        url: 'http://smqfedu.cn/smqfedu/teacher/getteacherinfo?teacherType=7',
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
      
      this.qinghuabeidazhuangyuantuandui=arr
   }).catch(function (error) {
    })

  },
  mounted() {
    document.documentElement.scrollTop=0;
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    aboutus() {
      this.$router.push("/aboutus");
    },
    curriculums() {
      this.$router.push("/curriculums");
    },
    elegantdisplay() {
      this.$router.push("/elegantdisplay");
    },
    xialingying(){
      this.$router.push("/xialingying")
    },
  }
};
